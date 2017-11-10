import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ModalComponentConfiguration
} from 'interfaces';

class Modal {

  public config: KnockoutObservable<ModalComponentConfiguration>;
  public labelledBy: KnockoutObservable<string>;

  constructor() {
    

  }
  
  activate(settings:any) {
    
    if(settings.config) {

      this.config = ko.observable(settings.config);
      if(!this.config().id){
        this.config().id = 'modal-default-id';
      }
      this.labelledBy = ko.observable(this.config().id + '-label');
    }
    else {
      throw `Missing required object: 'configuration'`;
    }

    console.log(settings);
    
  }

}

export = Modal;