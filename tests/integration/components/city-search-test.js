import { module, test } from 'qunit';
import { setupRenderingTest } from 'weather-app/tests/helpers';
import { render, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | city-search', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CitySearch />`);
    // await pauseTest();
    assert.dom(this.element).exists();
    assert.dom('[data-test-selector="search-text"]').hasText('City Id: ');
    assert.dom('[data-test-selector="search-input"]').hasText('');
    assert.dom('[data-test-selector="search-button"]').hasText('Search');
  });
});
