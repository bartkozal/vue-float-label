import { ctorInput, ctorTextArea, ctorSelect } from '../helpers'

test('label', () => {
  expect(ctorInput().label).toEqual('Name')
  expect(ctorTextArea().label).toEqual('Comment')
  expect(ctorSelect().label).toEqual('Framework')
})

test('formEl', () => {
  expect(ctorInput().formEl).toBeInstanceOf(HTMLInputElement)
  expect(ctorTextArea().formEl).toBeInstanceOf(HTMLTextAreaElement)
  expect(ctorSelect().formEl).toBeInstanceOf(HTMLSelectElement)
})

test('formElType', () => {
  expect(ctorInput().formElType).toEqual('input')
  expect(ctorTextArea().formElType).toEqual('textarea')
  expect(ctorSelect().formElType).toEqual('select')
})

test('classObject', () => {
  const vm = ctorInput()
  const classObjectKeys = Object.keys(vm.classObject)
  expect(classObjectKeys).toContain('vfl-label-on-input')
  expect(classObjectKeys).toContain('vfl-label-on-focus')
})

test('focusFormEl', () => {
  const vm = ctorInput()
  vm.formEl.focus = jest.fn()
  vm.focusFormEl()
  expect(vm.formEl.focus).toHaveBeenCalledTimes(1)
})

describe('updateHasValue', () => {
  test('hasValue is true when element value isnt empty', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.formEl.value = 'Foo'
    vm.updateHasValue(event)
    expect(vm.hasValue).toEqual(true)
  })

  test('hasValue is false when element value is empty', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.formEl.value = ''
    vm.updateHasValue(event)
    expect(vm.hasValue).toEqual(false)
  })
})

describe('updateIsActive', () => {
  test('isActive is true when element is focused and has content', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.hasValue = true
    vm.formEl.focus()
    vm.updateIsActive(event)

    expect(vm.isActive).toEqual(true)
  })

  test('isActive is false when element isnt focused and has content', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.hasValue = true
    vm.updateIsActive(event)

    expect(vm.isActive).toEqual(false)
  })

  test('isActive is false when element isnt focused and doesnt have content', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.updateIsActive(event)

    expect(vm.isActive).toEqual(false)
  })
})
