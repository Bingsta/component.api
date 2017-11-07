import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { CheckboxRadioGroupFieldConfiguration, CheckboxRadioConfiguarion } from 'interfaces';

class GroupInputField {

  public config: KnockoutObservable<CheckboxRadioGroupFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("checkbox component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);
      console.log(this.config());
      

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = GroupInputField;