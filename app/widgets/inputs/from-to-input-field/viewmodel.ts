import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { FromToInputFieldConfiguration } from 'interfaces';

class FromToInputField {

  public config: KnockoutObservable<FromToInputFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("From - to field component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);


    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = FromToInputField;