import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';

export default class ForecastAdapter extends JSONAPIAdapter {
  /*
    get data from accuweather api
  * */
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  query(store, type, query, recordArray, adapterOptions) {
    const params = {
      apikey: encodeURIComponent(ENV.ACCUWEATHER_ACCESS_TOKEN),
    };
    return this.ajax(this.buildURL(query), 'GET', { data: params });
  }
  //in order to override adding 's' in the end of the model name
  pathForType(modelName) {
    return modelName;
  }

  /*
  get data from json
* */
  // namespace = 'api';
  //
  // buildURL(...args) {
  //   console.log('ForecastAdapter', args);
  //   // return `${super.buildURL(...args)}.json`;
  //   return `api/forecast.json`;
  // }
}
