import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { InputFieldConfiguration } from '../../interfaces';

class FileInputField {

  public config: KnockoutObservable<InputFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("File component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);
      
      this.config().input.type = "file";

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = FileInputField;