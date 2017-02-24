import Vue from 'vue'
import FloatLabel from 'components/FloatLabel'

const getFloatLabel = () => {
  return new Vue({
    components: { FloatLabel },
    render: h => {
      return h('float-label', [
        h('input', {
          attrs: {
            type: 'text',
            placeholder: 'Name'
          }
        })
      ])
    }
  }).$mount().$children[0]
}

test('setup on mount', () => {
  const vm = getFloatLabel()
  expect(vm.el).toBeInstanceOf(HTMLInputElement)
  expect(vm.width).toEqual('-6px') // clientWidth = 0
  expect(vm.placeholder).toEqual('Name')
  expect(vm.el.placeholder).toEqual('')
})

test('classObject', () => {
  const vm = getFloatLabel()
  const classObjectKeys = Object.keys(vm.classObject)
  expect(classObjectKeys).toContain('vfl-label-on-input')
  expect(classObjectKeys).toContain('vfl-label-on-focus')
})

test('focusEl', () => {
  const vm = getFloatLabel()
  vm.el.focus = jest.fn()
  vm.focusEl()
  expect(vm.el.focus).toHaveBeenCalledTimes(1)
})

describe('updateHasContent', () => {
  test('hasContent is true when element value isnt empty', () => {
    const vm = getFloatLabel()
    const event = { target: vm.el }
    vm.el.value = 'Foo'
    vm.updateHasContent(event)
    expect(vm.hasContent).toEqual(true)
  })

  test('hasContent is false when element value is empty', () => {
    const vm = getFloatLabel()
    const event = { target: vm.el }
    vm.el.value = ''
    vm.updateHasContent(event)
    expect(vm.hasContent).toEqual(false)
  })
})

describe('updateIsFocused', () => {
  test('isFocused is true when element is focused and has content', () => {
    const vm = getFloatLabel()
    const event = { target: vm.el }
    vm.hasContent = true
    vm.focusEl()
    vm.updateIsFocused(event)

    expect(vm.isFocused).toEqual(true)
  })

  test('isFocused is false when element isnt focused and has content', () => {
    const vm = getFloatLabel()
    const event = { target: vm.el }
    vm.hasContent = true
    vm.updateIsFocused(event)

    expect(vm.isFocused).toEqual(false)
  })

  test('isFocused is false when element isnt focused and doesnt have content', () => {
    const vm = getFloatLabel()
    const event = { target: vm.el }
    vm.updateIsFocused(event)

    expect(vm.isFocused).toEqual(false)
  })
})
