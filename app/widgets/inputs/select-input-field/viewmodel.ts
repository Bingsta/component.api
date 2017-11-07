import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { SelectFieldConfiguration } from 'interfaces';

class SelectInputField {

  public config: KnockoutObservable<SelectFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("SelectInputField component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = SelectInputField;