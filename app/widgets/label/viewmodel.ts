import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { LabelsComponentConfiguration } from 'interfaces';

class Label {

  public config: KnockoutObservable<LabelsComponentConfiguration>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      console.log("Label component>>>");
      console.log(settings.config);
      //set default theme
      if(!this.config().theme) {
        this.config().theme = 'label-default';
      } 

    }
    else{
      throw "Missing configuration file"
    }
  }


}

export = Label;