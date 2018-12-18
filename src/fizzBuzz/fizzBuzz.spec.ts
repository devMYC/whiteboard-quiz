import * as sinon from 'sinon'
import { fizzBuzz } from './fizzBuzz'


beforeEach(() => { sinon.spy(console, 'log') })
afterEach(() => { (console.log as sinon.SinonSpy).restore() })


test('should print nothing', () => {
  const spy = console.log as sinon.SinonSpy
  fizzBuzz(0)
  expect( spy.callCount ).toBe(0)
})


test('should print one', () => {
  const spy = console.log as sinon.SinonSpy
  fizzBuzz(1)
  expect( spy.calledOnce ).toBeTruthy()
  expect( spy.getCall(0).args[0] ).toBe(1)
})


test('should print from one to fifteen', (() => {
  const spy = console.log as sinon.SinonSpy
  fizzBuzz(15)
  expect( spy.callCount ).toBe(15)
  expect( spy.thirdCall.args[0] ).toBe('fizz')
  expect( spy.getCall(4).args[0] ).toBe('buzz')
  expect( spy.lastCall.args[0] ).toBe('fizzbuzz')
}))
