import { shallowMount, mount, config } from '@vue/test-utils'
import AppNumberSupporter from '@/components/AppNumberSupporter.vue'
import { i18n } from '@/i18n'

describe('AppNumberSupporter.vue', () => {
  it('renders all when passed', () => {
    const value: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    expect(wrapper.find(`div[role="radio"]:nth-child(1)`).classes('active')).toBeTruthy()
  })

  it('renders odd when passed', () => {
    const value: number[] = [1, 3, 5, 7, 9]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    expect(wrapper.find(`div[role="radio"]:nth-child(2)`).classes('active')).toBeTruthy()
  })

  it('renders even when passed', () => {
    const value: number[] = [0, 2, 4, 6, 8]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    expect(wrapper.find(`div[role="radio"]:nth-child(3)`).classes('active')).toBeTruthy()
  })

  it('renders big when passed', () => {
    const value: number[] = [5, 6, 7, 8, 9]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    expect(wrapper.find(`div[role="radio"]:nth-child(4)`).classes('active')).toBeTruthy()
  })

  it('renders small when passed', () => {
    const value: number[] = [0, 1, 2, 3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    expect(wrapper.find(`div[role="radio"]:nth-child(5)`).classes('active')).toBeTruthy()
  })

  it('renders clear when passed', () => {
    const value: number[] = []
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    expect(wrapper.find(`div[role="radio"]:nth-child(6)`).classes('active')).toBeTruthy()
  })

  it('return data when click all', () => {
    const value: number[] = [3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    wrapper.find(`div[role="radio"]:nth-child(1)`).trigger('click')
    expect(wrapper.emitted().input[0][0]).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('return data when click odd', () => {
    const value: number[] = [3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    wrapper.find(`div[role="radio"]:nth-child(2)`).trigger('click')
    expect(wrapper.emitted().input[0][0]).toEqual([1, 3, 5, 7, 9])
  })

  it('return data when click even', () => {
    const value: number[] = [3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    wrapper.find(`div[role="radio"]:nth-child(3)`).trigger('click')
    expect(wrapper.emitted().input[0][0]).toEqual([0, 2, 4, 6, 8])
  })

  it('return data when click big', () => {
    const value: number[] = [3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    wrapper.find(`div[role="radio"]:nth-child(4)`).trigger('click')
    expect(wrapper.emitted().input[0][0]).toEqual([5, 6, 7, 8, 9])
  })

  it('return data when click small', () => {
    const value: number[] = [3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    wrapper.find(`div[role="radio"]:nth-child(5)`).trigger('click')
    expect(wrapper.emitted().input[0][0]).toEqual([0, 1, 2, 3, 4])
  })

  it('return data when click clear', () => {
    const value: number[] = [3, 4]
    const wrapper = shallowMount(AppNumberSupporter, {
      propsData: { value },
      i18n,
      sync: false
    })
    wrapper.find(`div[role="radio"]:nth-child(6)`).trigger('click')
    expect(wrapper.emitted().input[0][0]).toEqual([])
  })
})
