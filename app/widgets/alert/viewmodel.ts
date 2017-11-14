import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { AlertComponentConfiguration } from 'interfaces';

class Alert {

  public config: KnockoutObservable<AlertComponentConfiguration>;
  public themeCSS: KnockoutComputed<string>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      
      //add computed
      this.themeCSS = ko.computed(() => {
        //return the theme css
        switch(this.config().theme) {
          case 'warning':
          return 'alert-warning';
          case 'success':
          return 'alert-success';
          case 'danger':
          return 'alert-danger';
          default:
          return 'alert-info';
        }
      });

    }
    else{
      throw "Missing configuration file"
    }
  }


}

export = Alert;