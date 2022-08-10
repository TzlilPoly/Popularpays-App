import { module, test } from 'qunit';
import { setupRenderingTest } from 'weather-app/tests/helpers';
import { render, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forecast-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const day = {
      date: '9.8.22',
      tempMinValue: 1,
      tempMaxValue: 35,
      dayIcon: 1,
      dayIconPhrase: 'description',
      nightIcon: 2,
      nightIconPhrase: 'description',
    };

    const data = [day, day, day, day, day];

    this.set('data', data);

    await render(hbs`<ForecastList @forecast={{this.data }}/>`);
    assert.dom(this.element).exists();
    // await pauseTest();

    assert
      .dom('[data-test-selector="forecast-list-title"]')
      .hasText('5 day weather forecast:');
    assert.dom('[data-test-selector="day-forecast"]').exists({ count: 5 });
  });
});
