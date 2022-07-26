import { module, test } from 'qunit';
import { setupTest } from 'weather-app/tests/helpers';

module('Unit | Controller | city-search', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:city-search');
    assert.ok(controller);
  });
});
