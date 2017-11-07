import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { FromToInputConfiguration } from 'interfaces';

class FromToInput {

  public config: KnockoutObservable<FromToInputConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("From - to component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);


    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = FromToInput;