const assert = require( 'chai' ).assert
const test = require('./database.js')

describe( 'test()', ()=> {
  it( 'should be a test', ()=> {
    let str = "foo is not bar"
    assert(test(str), 'foo is not bar');
  })
})
