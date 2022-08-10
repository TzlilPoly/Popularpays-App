import { module, test } from 'qunit';
import { setupRenderingTest } from 'weather-app/tests/helpers';
import { render, pauseTest } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forecast-display', function (hooks) {
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

    this.set('day', day);

    await render(hbs`<ForecastDisplay @forecast={{this.day}} />`);
    // await pauseTest();
    assert.dom(this.element).exists();
    assert.dom('[data-test-selector="day-forecast-date"]').hasText(day.date);
    assert
      .dom('[data-test-selector="day-forecast-temp"]')
      .hasText(`${day.tempMinValue}°F - ${day.tempMaxValue}°F`);
    assert
      .dom('[data-test-selector="day-forecast-day-description"]')
      .hasText(`Day - ${day.dayIconPhrase}`);
    assert
      .dom('[data-test-selector="day-forecast-night-description"]')
      .hasText(`Night - ${day.dayIconPhrase}`);
  });
});
