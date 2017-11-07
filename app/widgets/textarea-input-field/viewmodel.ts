import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { TextAreaFieldConfiguration } from '../../interfaces';

class TextInputField {

  public config: KnockoutObservable<TextAreaFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("Textarea component>>>");
      console.log(settings.config);
      
      this.config = ko.observable(settings.config);

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = TextInputField;