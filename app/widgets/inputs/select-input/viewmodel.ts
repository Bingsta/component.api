import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { SelectInputConfiguration } from 'interfaces';

class SelectInputField {

  public config: KnockoutObservable<SelectInputConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("SelectInputField component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);

      if(this.config().size==null) {
        this.config().size=null;
      }
      if(this.config().autofocus==null) {
        this.config().autofocus=false;
      }
      if(this.config().disabled==null) {
        this.config().disabled=false;
      }
      if(this.config().required==null) {
        this.config().required=false;
      }
      if(this.config().multiple==null) {
        this.config().multiple=false;
      }

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = SelectInputField;