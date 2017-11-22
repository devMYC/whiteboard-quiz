import 'jest'
import * as sinon from 'sinon'
import { pyramid } from './pyramid'


beforeEach(() => { sinon.spy(console, 'log') })
afterEach(() => { (console.log as sinon.SinonSpy).restore() })


test('should print nothing', () => {
  pyramid(0)
  expect( (console.log as sinon.SinonSpy).notCalled ).toBeTruthy()
})


test('should print 1 level', () => {
  pyramid(1)
  expect( (console.log as sinon.SinonSpy).calledOnce ).toBeTruthy()
  expect( (console.log as sinon.SinonSpy).getCall(0).args[0] ).toBe('*')
})


test('should print 2 level', () => {
  pyramid(2)
  expect( (console.log as sinon.SinonSpy).calledTwice ).toBeTruthy()
  expect( (console.log as sinon.SinonSpy).getCall(0).args[0] ).toBe('  *  ')
  expect( (console.log as sinon.SinonSpy).getCall(1).args[0] ).toBe('* * *')
})


test('should print 3 level', () => {
  pyramid(3)
  expect( (console.log as sinon.SinonSpy).calledThrice ).toBeTruthy()
  expect( (console.log as sinon.SinonSpy).getCall(0).args[0] ).toBe('    *    ')
  expect( (console.log as sinon.SinonSpy).getCall(1).args[0] ).toBe('  * * *  ')
  expect( (console.log as sinon.SinonSpy).getCall(2).args[0] ).toBe('* * * * *')
})
