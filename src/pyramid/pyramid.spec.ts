import 'jest'
import * as sinon from 'sinon'
import { pyramid } from './pyramid'


beforeEach(() => { sinon.spy(console, 'log') })
afterEach(() => { (console.log as sinon.SinonSpy).restore() })


test('should print nothing', () => {
  const spy = console.log as sinon.SinonSpy
  pyramid(0)
  expect( spy.notCalled ).toBeTruthy()
})


test('should print 1 level', () => {
  const spy = console.log as sinon.SinonSpy
  pyramid(1)
  expect( spy.calledOnce ).toBeTruthy()
  expect( spy.getCall(0).args[0] ).toBe('*')
})


test('should print 2 level', () => {
  const spy = console.log as sinon.SinonSpy
  pyramid(2)
  expect( spy.calledTwice ).toBeTruthy()
  expect( spy.getCall(0).args[0] ).toBe('  *  ')
  expect( spy.getCall(1).args[0] ).toBe('* * *')
})


test('should print 3 level', () => {
  const spy = console.log as sinon.SinonSpy
  pyramid(3)
  expect( spy.calledThrice ).toBeTruthy()
  expect( spy.getCall(0).args[0] ).toBe('    *    ')
  expect( spy.getCall(1).args[0] ).toBe('  * * *  ')
  expect( spy.getCall(2).args[0] ).toBe('* * * * *')
})
