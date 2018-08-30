import { shallowMount } from '@vue/test-utils'
import Summary from '@/components/Summary'

describe('Summary.vue', () => {
  let cmp

  beforeEach(() => {
    cmp = shallowMount(Summary, { // Create a shallow instance of the component
      propsData: {
        total: '$100'
      }
    })
  })
  it('has the expected html structure', () => {
    expect(cmp.element).toMatchSnapshot()
  })
})
