import app from '../src/App'
import { assert } from 'chai'
import { mount } from '@vue/test-utils'

describe('app', function () {
  it('should return a reveresed string', function () {
    const appComp = mount(app)
    assert(appComp.reversed).equal('gnirts emos')
  })
})
