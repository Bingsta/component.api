import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ModalComponent
} from '../../interfaces';

class Modal {

  public component: ModalComponent;
  public labelledBy: KnockoutObservable<string>;

  constructor() {
    

  }
  
  activate(settings:any) {
    
    if(settings.component) {

      this.component = settings.component;
      if(!this.component.id){
        this.component.id = ko.observable('modal-default-id');
      }
      this.labelledBy = ko.observable(this.component.id() + '-label');
    }
    else {
      throw `Missing required object: 'component'`;
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