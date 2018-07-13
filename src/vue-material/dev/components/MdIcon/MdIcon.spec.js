import mountTemplate from 'test/utils/mountTemplate'
import mockRequest from 'test/utils/mockRequest'
import { mount } from '@vue/test-utils'
import MdIcon from './MdIcon.vue'

test('should accept icon as ligature', async () => {
  const template = '<md-icon>menu</md-icon>'
  const wrapper = await mountTemplate(MdIcon, template)

  expect(wrapper.classes()).toContain('md-icon-font')
  expect(wrapper.text()).toBe('menu')
})

test('should render a external svg icon', async () => {
  const svgUrl = 'test.svg'
  const svgContent = '<svg xmlns="http://www.w3.org/2000/svg"></svg>'
  const prop = 'mdSrc'
  let wrapper = null

  const mock = mockRequest({
    url: svgUrl,
    content: svgContent,
    headers: {
      'Content-Type': 'image/svg+xml'
    }
  })

  wrapper = mount(MdIcon, {
    propsData: {
      [prop]: svgUrl
    }
  })

  await mock()

  expect(wrapper.vm.$props[prop]).toBe(svgUrl)
  expect(wrapper.classes()).toContain('md-icon-image')
  expect(wrapper.contains('svg')).toBe(true)
})