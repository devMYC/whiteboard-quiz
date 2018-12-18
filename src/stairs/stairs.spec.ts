import * as sinon from 'sinon'
import { stairs } from './stairs'


beforeEach(() => { sinon.spy(console, 'log') })
afterEach(() => { (console.log as sinon.SinonSpy).restore() })


test('should print nothing if level is less than one', () => {
  const spy = console.log as sinon.SinonSpy
  stairs(0)
  expect( spy.notCalled ).toBeTruthy()
})


test('should print one level', () => {
  const spy = console.log as sinon.SinonSpy
  stairs(1)
  expect( spy.calledOnce ).toBeTruthy()
  expect( spy.firstCall.args[0] ).toBe('#')
})


test('should print two levels', () => {
  const spy = console.log as sinon.SinonSpy
  stairs(2)
  expect( spy.calledTwice ).toBeTruthy()
  expect( spy.firstCall.args[0] ).toBe('# ')
  expect( spy.secondCall.args[0] ).toBe('##')
})


test('should print three levels', () => {
  const spy = console.log as sinon.SinonSpy
  stairs(3)
  expect( spy.calledThrice ).toBeTruthy()
  expect( spy.firstCall.args[0] ).toBe('#  ')
  expect( spy.secondCall.args[0] ).toBe('## ')
  expect( spy.thirdCall.args[0] ).toBe('###')
})
