import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ViewerComponentModel, 
  ComponentStyle, 
  ComponentStyleCollection,
  AccordianItem 
} from '../../interfaces';

class Labels {

public components: KnockoutObservableArray<ViewerComponentModel> = ko.observableArray([
    new ViewerComponentModel(
      'Base', 
      '<span class="label label-default">42</span>',
      [
        {
          title: 'Modifers',
          open: ko.observable(true),
          items: [
            {     name:    "Default",       className:   "label-default",      applied: ko.observable(true)     },
            {     name:    "Primary",       className:   "label-primary",      applied: ko.observable(false)         },
            {     name:    "Warning",       className:   "label-warning",      applied: ko.observable(false)        },
            {     name:    "Info",          className:   "label-info",         applied: ko.observable(false)         },
            {     name:    "Danger",        className:   "label-danger",       applied: ko.observable(false)         },
            {     name:    "Success",       className:   "label-success",      applied: ko.observable(false)         },
          ]
        }
      ]
    )
  ]);


  constructor() {

  }

  activate() {
    
  }
}

export = Labels;