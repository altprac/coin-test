require('dotenv').config();

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fetch = require('node-fetch');
const clientIo = require('socket.io-client')(process.env.CRYPTO_URI);

const crypto = process.env.CRYPTO.split(',');
const baseFiat = process.env.BASE_FIAT;
const fiat =  process.env.FIAT.split(',');
const fiatTimer = process.env.FIAT_TIMER;

// crypto
app.locals.crypto = {};
const subscription = crypto.map(key => {
    app.locals.crypto[key] = 0;
    return `5~CCCAGG~${key}~${baseFiat}`;
});
// subscribe to feed
clientIo.emit('SubAdd', { subs: subscription });
// handle subscription 
clientIo.on('m', (message) => {
    const msg = message.split('~');
    if(msg[0] ==5 && (msg[4] !=4 || !app.locals.crypto[msg[2]])){
        app.locals.crypto[msg[2]] = msg[5];
        io.emit('crypto',  [msg[2], msg[5]]);
    }
});
// fiat
app.locals.fiat = {};
const fiatFetch = code =>{
    const returnCode = baseFiat+ '_'+ code;
    fetch(process.env.FIAT_URI + returnCode)
        .then(result => result.json())
        .then (result => {
            if(app.locals.fiat[code] != result[returnCode]){
                // update local store
                app.locals.fiat[code] = result[returnCode];
                // emit change
                io.emit('fiat', {[code]: result[returnCode]});
            }
            setTimeout(fiatFetch, fiatTimer, code);
        })
        .catch((e) => {
            console.log(e)
            // try again in half the time
            setTimeout(fiatFetch, fiatTimer/2, code);
        });
};
// start fiat poll
fiat.forEach(key =>{
    app.locals.fiat[key] = 0;
    fiatFetch(key);
});

// handle client initialisation
io.on('connection', function (socket) {
    socket.emit('initialise', {cryptos: app.locals.crypto, fiats: app.locals.fiat});
});

app.use('/', express.static('dist'));

server.listen(process.env.PORT, () => console.log('running on ' + process.env.PORT));

