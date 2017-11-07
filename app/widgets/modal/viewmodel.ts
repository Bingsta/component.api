import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ModalComponentConfiguration
} from 'interfaces';

class Modal {

  public configuration: ModalComponentConfiguration;
  public labelledBy: KnockoutObservable<string>;

  constructor() {
    

  }
  
  activate(settings:any) {
    
    if(settings.configuration) {

      this.configuration = settings.configuration;
      if(!this.configuration.id){
        this.configuration.id = ko.observable('modal-default-id');
      }
      this.labelledBy = ko.observable(this.configuration.id() + '-label');
    }
    else {
      throw `Missing required object: 'configuration'`;
    }


    ko.bindingHandlers.htmlWithBinding = {
      'init': function() {

        return { 'controlsDescendantBindings': true };
      },
      'update': function (element: HTMLElement, valueAccessor, allBindings: KnockoutAllBindingsAccessor, viewModel, bindingContext) {

        console.log(valueAccessor().template());
        console.log(valueAccessor().viewmodel);
        element.innerHTML = valueAccessor().template();
        ko.applyBindingsToDescendants(valueAccessor().viewmodel, element);

        //run the activate function if any
        if(valueAccessor().viewmodel.activate) {
          valueAccessor().viewmodel.activate();
        }
      }
    };

    console.log(settings);
    
  }

}

export = Modal;