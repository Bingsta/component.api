import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ViewerComponentModel, 
  ComponentStyle, 
  ComponentStyleCollection,
  AccordianItem 
} from '../../interfaces';

class Buttons  {
  
  public components: KnockoutObservableArray<ViewerComponentModel> = ko.observableArray([
    new ViewerComponentModel(
      'Base', 
      '<button  class="btn btn-default">Button</button>',
      [
        {
          title: 'Modifers',
          open: ko.observable(true),
          items: [
            {     name:    "Default",       className:   "btn-default",      applied: ko.observable(true)     },
            {     name:    "Primary",       className:   "btn-primary",      applied: ko.observable(false)         },
            {     name:    "Accent",        className:   "btn-accent",       applied: ko.observable(false)         },
            {     name:    "Warning",       className:   "btn-warning",      applied: ko.observable(false)        },
            {     name:    "Info",          className:   "btn-info",         applied: ko.observable(false)         },
            {     name:    "Danger",        className:   "btn-danger",       applied: ko.observable(false)         },
            {     name:    "Success",       className:   "btn-success",      applied: ko.observable(false)         },
          ]
        }, 
        {
          title: 'States',
          open: ko.observable(true),
          items: [
            {     name:    "Normal",          className:   "",              applied: ko.observable(true)         },
            {     name:    "Disabled",        className:   "disabled",      applied: ko.observable(false)         },
            {     name:    "Active",          className:   "active",        applied: ko.observable(false)         }
          ]
        },
        {
          title:"Sizes",
          open: ko.observable(true),
          items:[
            {     name:    "Default",           className:   "",           applied: ko.observable(true)        },
            {     name:    "Large",             className:   "btn-lg",     applied: ko.observable(false)         },
            {     name:    "Small",             className:   "btn-sm",     applied: ko.observable(false)         },
            {     name:    "Extra small",       className:   "btn-xs",     applied: ko.observable(false)         },
          ]
        }
      ]
    )
  ]);

  constructor() {

  }

}

export = Buttons;