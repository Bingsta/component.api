import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { AlertComponentConfiguration } from 'interfaces';

class Alert {

  public config: KnockoutObservable<AlertComponentConfiguration>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      console.log("Alert component>>>");
      console.log(settings.config);
      //set default theme
      if(!this.config().theme) {
        this.config().theme = 'alert-warning';
      } 

    }
    else{
      throw "Missing configuration file"
    }
  }


}

export = Alert;