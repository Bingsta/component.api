import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ViewerComponentModel, 
  ComponentStyle, 
  ComponentStyleCollection,
  AccordianItem 
} from '../../interfaces';

class Modal {

public components: KnockoutObservableArray<ViewerComponentModel> = ko.observableArray([
    new ViewerComponentModel(
      'Base', 
      `
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Launch demo modal
        </button>

        <!-- Modal object -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      `,
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
        $
      }
    )
  ]);

  constructor() {

  }

  activate() {
    
  }
}

export = Modal;