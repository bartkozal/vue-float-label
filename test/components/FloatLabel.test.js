import { ctorInput, ctorTextArea, ctorSelect } from '../helpers'

test('floatLabel', () => {
  expect(ctorInput().floatLabel).toEqual('Name')
  expect(ctorTextArea().floatLabel).toEqual('Comment')
  expect(ctorSelect().floatLabel).toEqual('Framework')
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

describe('classObject', () => {
  test('contain onInput and onFocus classes', () => {
    const vm = ctorInput()
    const classObjectKeys = Object.keys(vm.classObject)
    expect(classObjectKeys).toContain('vfl-label-on-input')
    expect(classObjectKeys).toContain('vfl-label-on-focus')
  })
})

test('focusFormEl', () => {
  const vm = ctorInput()
  vm.formEl.focus = jest.fn()
  vm.focusFormEl()
  expect(vm.formEl.focus).toHaveBeenCalledTimes(1)
})

describe('updateIsActive', () => {
  test('isActive is true when element value isnt empty', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.formEl.value = 'Foo'
    vm.updateIsActive(event)
    expect(vm.isActive).toEqual(true)
  })

  test('isActive is false when element value is empty', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.formEl.value = ''
    vm.updateIsActive(event)
    expect(vm.isActive).toEqual(false)
  })
})

describe('updateIsFocused', () => {
  test('isFocused is true when element is focused and is active', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.isActive = true
    vm.formEl.focus()
    vm.updateIsFocused(event)

    expect(vm.isFocused).toEqual(true)
  })

  test('isFocused is false when element isnt focused and is active', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.isActive = true
    vm.updateIsFocused(event)

    expect(vm.isFocused).toEqual(false)
  })

  test('isFocused is false when element isnt focused and isnt active', () => {
    const vm = ctorInput()
    const event = { target: vm.formEl }
    vm.updateIsFocused(event)

    expect(vm.isFocused).toEqual(false)
  })
})

test(':label', () => {
  expect(ctorInput({ label: 'Foobar' }).floatLabel).toEqual('Foobar')
})

test(':fixed', () => {
  expect(ctorInput({ fixed: true }).classObject).toMatchObject({ 'vfl-label-on-input': true })
})

xtest(':on')
xtest(':dispatch')
