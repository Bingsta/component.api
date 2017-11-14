import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { CheckboxRadioGroupConfiguration, CheckboxRadioConfiguration } from 'interfaces';

class GroupInputField {

  public config: KnockoutObservable<CheckboxRadioGroupConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("checkbox component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);
      console.log(this.config());
      this.config().options.forEach((option:CheckboxRadioConfiguration)=>{

        if(option.autofocus==null) {
          option.autofocus=false;
        }
        if(option.disabled==null) {
          option.disabled=false;
        }
        if(option.checked==null) {
          option.checked=false;
        }
      });

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = GroupInputField;