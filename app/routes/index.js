import Route from '@ember/routing/route';

import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    // console.log('This is the dynamic segment data: ' + params.city_id);

    try {
      const data = await this.store.query(
        'forecast',
        params.city_id ? params.city_id : '215854'
      );
      return { data: data };
    } catch (e) {
      // console.log({e});
      return { error: e };
    }
  }
}
