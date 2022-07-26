import Model, { attr } from '@ember-data/model';

export default class ForecastModel extends Model {
  @attr date;
  @attr tempMinValue;
  @attr tempMaxValue;
  @attr dayIcon;
  @attr dayIconPhrase;
  @attr nightIcon;
  @attr nightIconPhrase;
}
