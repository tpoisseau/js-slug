/**
 * js-slug test suite
 * Heavely inspired from `node-slug` of Slynova - Romain Lanz <romain.lanz@slynova.ch>
 * https://github.com/Slynova-Org/slug/blob/develop/test/slug.spec.js
 *
 * @license MIT
 * @copyright tpoisseau - Theotime Poisseau 
 * */
import test from 'japa';
import slug from './index.mjs';

test.group('Slugify', () => {
  test('should return an empty string when giving nothing', (assert) => {
    assert.equal(slug(), '')
  })

  test('should convert number to string', (assert) => {
    assert.equal(slug(1), '1')
  })

  test('should trim whitespace', (assert) => {
    assert.equal(slug(' hey '), 'hey')
  })

  test('should transform a title to his slug equivalent', (assert) => {
    assert.equal(slug('Hey!, I\'am a title!'), 'hey-i-am-a-title')
  })

  test('should convert a value to a slug', function (assert) {
    assert.equal(slug('learn adonis in 30 minutes'), 'learn-adonis-in-30-minutes')
  })

  test('should convert a weired value to a slug', function (assert) {
    assert.equal(slug('weird[case'), 'weird-case')
  })

  test('should convert a dot seperate value to a slug', function (assert) {
      assert.equal(slug('dot.case'), 'dot-case')
  })

  test('should convert accent text to a slug', function (assert) {
    assert.equal(slug('tôi tên là d͌ức tạ'), 'toi-ten-la-duc-ta')
  })
})