import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption
} from 'interfaces';

class Modal {

    public component: Component2;

    constructor() {
 
      this.component = new Component2("label", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span class="icon icon-cross2" aria-hidden="true"></span>
        </button>
        <h1 class="modal-title">Modal title</h1>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->`
            },
            {
              name: "widget",
              code: `<!-- ko widget: {
  kind: 'modal',
  config: {
    id: 'test_modal',
    title: 'Test modal',
    bodyView: {
      view: $("<article><h2>Example tab content</h2><div data-bind='html: content'></div></article>").get(0),
      model: {
        content: '<h3>Databinding</h3><p>This text is bound from a view model</p>'
      }
    },
    footerView: {
      view: $(\`<div>
      <button type="button" class="btn btn-default" data-dismiss="modal" data-bind="click: closeAction">Close</button>
      <button type="button" class="btn btn-primary" data-bind="click: saveAction">Save changes</button>
      </div>\`).get(0),
      model: {
        closeAction: function() {
          alert("Close me");
        },
        saveAction: function() {
          alert("Save me");
        }
      }
    }
  }
}--><!-- /ko -->`
            }
          ],
          modifiers: []
        }
      ]);

      
      
      this.component.reference = {
        about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
        cssOptions: [
        ],
        widgetOptions: [
          {
            kind: 'modal',
            description: 'Standard tabs widget',
            options: [
              {
                name: 'id',
                description: 'Sets a HTML ID to the base element.',
                dataType: 'string',
                values:  'any',
                optional: true
              },
              {
                name: 'title',
                description: 'Text string which appears as the modal title in the modal header.',
                dataType: 'string',
                values:  'any',
                optional: false
              },
              {
                name: 'bodyView',
                description: 'A viewmodel which gets bound as the body content of the modal',
                dataType: '<a href="#ViewModel">ViewModel</a>',
                values: 'any',
                optional: false
              },
              {
                name: 'footerView',
                description: 'A viewmodel which gets bound as the content of the footer of the modal',
                dataType: '<a href="#ViewModel">ViewModel</a>',
                values: 'any',
                optional: false
              }
            ]
          }

        ],
        objectReference: [
          {
            name: 'ViewModel',
            description: "A durandal view-model object bound using durandal composition. See <a href=\"http://durandaljs.com/documentation/Using-Composition.html\" target=\"_new\">using composition</a>",
            options: [
              {
                name: 'view',
                description: 'HTML which gets bound to the view by durandals \'composition\'. If you pass in a string it is interperated as a view locator. If you pass in a HTMLElement it is rendered as the view.',
                dataType: 'string or HTMLElement',
                values: 'any',
                optional: true
              },
              {
                name: 'model',
                description: 'A view model which gets bound to the view.',
                dataType: 'any',
                values: 'any',
                optional: true
              }
            ]
          }
        ]
      };
      
      this.component.description = `<p class="font-up-2">Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.</p>`;
    }

    activate() {
        
    }
}

export = Modal;