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
      ])
    }

    activate() {
        
    }
}

export = Modal;