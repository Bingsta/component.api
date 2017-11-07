import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DateFieldConfiguration } from '../../interfaces';

class DateInputField {

  public config: KnockoutObservable<DateFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("date component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);

      if(this.config().input.type==null) {
        this.config().input.type = "date";
      }
    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = DateInputField;