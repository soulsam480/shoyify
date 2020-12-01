import { shallowMount } from '@vue/test-utils'
import ShoyoButton from "@/components/ShoyoButton.vue"

describe('ShoyoButton.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(ShoyoButton, {
      props: {
        type: 'btn-red'
      }
    })
    expect(wrapper.classes()).toContain('btn-red')
  })
})
