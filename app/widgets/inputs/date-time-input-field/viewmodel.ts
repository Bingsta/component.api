import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DateFieldConfiguration } from 'interfaces';

class DateInputField {

  public config: KnockoutObservable<DateFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("datetime-local component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);

      this.config().input.type = "datetime-local";
      this.config().input.addon = true;

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = DateInputField;