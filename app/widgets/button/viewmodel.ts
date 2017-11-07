import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { ButtonComponentConfiguration } from 'interfaces';

class Button {

  public config: KnockoutObservable<ButtonComponentConfiguration>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      console.log("Button component>>>");
      console.log(settings.config);
      //set default theme
      if(!this.config().theme) {
        this.config().theme = 'btn-default';
      } 

    }
    else{
      throw "Missing configuration file"
    }
  }


}

export = Button;