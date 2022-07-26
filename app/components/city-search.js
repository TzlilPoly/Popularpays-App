import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class CitySearchComponent extends Component {
  @tracked cityId = '';
  @service router;

  @action
  handleChange(event) {
    console.log(event);
  }

  @action
  handleClick() {
    this.router.transitionTo(`/${this.cityId}`);
  }
}
