import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { AccordianItem } from "../../interfaces";

class Accordian {

  public items:KnockoutObservableArray<AccordianItem>;


  constructor() {
    
  }
  
  activate(settings:any) {
    
    console.log(settings);
    if(settings.items){

      this.items = settings.items;
      this.items().forEach((item: AccordianItem) => {
        if(!item.open) {
          item.open = ko.observable(false);
        }
      });
      
      ko.bindingHandlers.htmlWithBinding = {
        'init': function() {
          return { 'controlsDescendantBindings': true };
        },
        'update': function (element: HTMLElement, valueAccessor, allBindings: KnockoutAllBindingsAccessor, viewModel, bindingContext) {
          console.log(valueAccessor().template());
          console.log(valueAccessor().viewmodel);
          element.innerHTML = valueAccessor().template();
          ko.applyBindingsToDescendants(valueAccessor().viewmodel, element);

          //run the acivate function if any
          if(valueAccessor().viewmodel.activate) {
            valueAccessor().viewmodel.activate();
          }
        }
      };

    }
    else{
      throw "No items object supplied";
    }
  }

  public handleHeaderClick(item: AccordianItem, event: JQueryEventObject) {
    this.toogleItemView(item);
  }

  public toogleItemView(item: AccordianItem) {
    item.open(!item.open());
  }

}

export = Accordian;