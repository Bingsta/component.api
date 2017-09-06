import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { BadgeComponentConfiguration } from '../../interfaces';

class Badge {

  public config: KnockoutObservable<BadgeComponentConfiguration>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      console.log("Badge component>>>");
      console.log(settings.config);

    }
    else{
      throw "Missing configuration file"
    }
  }


}

export = Badge;