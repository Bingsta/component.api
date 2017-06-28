import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ModalComponentConfiguration
} from '../../interfaces';

class Test {

  public modal: ModalComponentConfiguration = {
    id: ko.observable('modal-test'),
    body: {
     template: ko.observable(`
      <p>Testy test</p>
      <button class="btn btn-sm btn-default" data-bind="click: testClicked">example</button>
     `),
     viewmodel: {
      testClicked: function() {
        alert("test clicked");
      }
     }
    },
    footer: {
      template: ko.observable(`
      <button class="btn btn-default" data-dismiss="modal">Close</button>
      <button class="btn btn-primary" data-bind="click: handleSaveClick">Save changes</button>
      `),
      viewmodel: {
        handleSaveClick: function() {
          alert("save changes clicked");
        }
      }
    },
    title: ko.observable('Testy bobs')
  }

  constructor() {

  }

  activate() {
    
  }
}

export = Test;