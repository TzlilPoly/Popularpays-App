import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from '../config/environment';

export default class ForecastAdapter extends JSONAPIAdapter {
  /*
    get data from accuweather api
  * */
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';
  query(store, type, query) {
    const params = {
      apikey: encodeURIComponent(ENV.ACCUWEATHER_ACCESS_TOKEN),
    };
    return this.ajax(this.buildURL(query), 'GET', { data: params });
  }

  // query(store, type, query){
  //   let url = this.buildURL(type.modelName, null, null, 'query', query);
  //
  //   if (this.sortQueryParams) {
  //     query = this.sortQueryParams(query);
  //   }
  //
  //   return this.ajax(url, 'GET', { data: query });
  // }
  // in order to override adding 's' in the end of the model name
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
