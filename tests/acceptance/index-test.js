import { module, test } from 'qunit';
import { typeIn, click, visit, currentURL } from '@ember/test-helpers';
import { pauseTest } from '@ember/test-helpers';
import { setupApplicationTest } from 'weather-app/tests/helpers';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');
    await typeIn('[data-test-selector="search-input"]', '215752');
    await click('[data-test-selector="search-button"]', { shiftKey: true });
    // await pauseTest();
    assert.strictEqual(currentURL(), '/');
    assert
      .dom('[data-test-selector="forecast-list-title"]')
      .hasText('5 day weather forecast:');
    assert.dom('[data-test-selector="day-forecast"]').exists({ count: 5 });
  });
});
