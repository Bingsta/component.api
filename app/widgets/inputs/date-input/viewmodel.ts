import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DateInputConfiguration } from 'interfaces';

class DateInput {

  public config: KnockoutObservable<DateInputConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("input component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);
      
      if(this.config().type==null) {
        this.config().type="date";
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
      if(this.config().readonly==null) {
        this.config().readonly=false;
      }
      if(this.config().min==null) {
        this.config().min=null;
      }
      if(this.config().max==null) {
        this.config().max=null;
      }
      if(this.config().step==null) {
        this.config().step=null;
      }
      if(this.config().value==null) {
        this.config().value=null;
      }

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = DateInput;