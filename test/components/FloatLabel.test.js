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
  expect(vm.input).toBeInstanceOf(HTMLInputElement)
  expect(vm.label).toEqual('Name')
})

test('classObject', () => {
  const vm = getFloatLabel()
  const classObjectKeys = Object.keys(vm.classObject)
  expect(classObjectKeys).toContain('vfl-label-on-input')
  expect(classObjectKeys).toContain('vfl-label-on-focus')
})

test('focusInput', () => {
  const vm = getFloatLabel()
  vm.input.focus = jest.fn()
  vm.focusInput()
  expect(vm.input.focus).toHaveBeenCalledTimes(1)
})

describe('updateHasValue', () => {
  test('hasValue is true when element value isnt empty', () => {
    const vm = getFloatLabel()
    const event = { target: vm.input }
    vm.input.value = 'Foo'
    vm.updateHasValue(event)
    expect(vm.hasValue).toEqual(true)
  })

  test('hasValue is false when element value is empty', () => {
    const vm = getFloatLabel()
    const event = { target: vm.input }
    vm.input.value = ''
    vm.updateHasValue(event)
    expect(vm.hasValue).toEqual(false)
  })
})

describe('updateIsActive', () => {
  test('isActive is true when element is focused and has content', () => {
    const vm = getFloatLabel()
    const event = { target: vm.input }
    vm.hasValue = true
    vm.input.focus()
    vm.updateIsActive(event)

    expect(vm.isActive).toEqual(true)
  })

  test('isActive is false when element isnt focused and has content', () => {
    const vm = getFloatLabel()
    const event = { target: vm.input }
    vm.hasValue = true
    vm.updateIsActive(event)

    expect(vm.isActive).toEqual(false)
  })

  test('isActive is false when element isnt focused and doesnt have content', () => {
    const vm = getFloatLabel()
    const event = { target: vm.input }
    vm.updateIsActive(event)

    expect(vm.isActive).toEqual(false)
  })
})
