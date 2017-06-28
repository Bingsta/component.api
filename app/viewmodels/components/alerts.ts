import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ViewerComponentModel, 
  ComponentStyle, 
  ComponentStyleCollection,
  AccordianItem 
} from '../../interfaces';

class Alerts {

public components: KnockoutObservableArray<ViewerComponentModel> = ko.observableArray([
    new ViewerComponentModel(
      'Base', 
      '<div  class="alert alert-warning">This is used to display important messages!</div>',
      [
        {
          title: 'Modifers',
          open: ko.observable(true),
          items: [
            {     name:    "Warning",       className:   "alert-warning",      applied: ko.observable(true)     },
            {     name:    "Success",       className:   "alert-success",      applied: ko.observable(false)         },
            {     name:    "Danger",        className:   "alert-danger",       applied: ko.observable(false)         },
            {     name:    "Info",          className:   "alert-info",         applied: ko.observable(false)        }
          ]
        }
      ]
    ),
    new ViewerComponentModel(
      'Dismissible', 
`<div  class="alert alert-warning alert-dismissible fade in">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  
  This message can be dismissed by clicking the close icon.
</div>`,
      [
        {
          title: 'Modifers',
          open: ko.observable(true),
          items: [
            {     name:    "Warning",       className:   "alert-warning",      applied: ko.observable(true)     },
            {     name:    "Success",       className:   "alert-success",      applied: ko.observable(false)         },
            {     name:    "Danger",        className:   "alert-danger",       applied: ko.observable(false)         },
            {     name:    "Info",          className:   "alert-info",         applied: ko.observable(false)        }
          ]
        }
      ],
      function() {
        $().alert();
      }
    )
  ]);

  constructor() {

  }

  activate() {
    
  }
}

export = Alerts;