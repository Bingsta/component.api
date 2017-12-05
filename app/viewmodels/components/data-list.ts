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

class Datalist {

  public component: Component2;

  constructor() {

    this.component = new Component2("Button", [
      {
        name: "Base",
        codeBases: [
          {
            name: 'HTML',
            code: `<table class="table--left-right">
  <tbody>
      <tr>
        <td>Item title</td>
        <td>Item data</td>
      </tr>
      <tr>
        <td>Item title</td>
        <td>Item data</td>
      </tr>
      <tr>
        <td>Item title</td>
        <td>This is a long one</td>
      </tr>
      <tr>
        <td>Item title</td>
        <td><span class="pill pill-success"><i class="icon icon-checkmark3"></i> <span>Pill example</span></span></td>
      </tr>
      <tr>
        <td>Item title</td>
        <td><span class="pill pill-success"><i class="icon icon-checkmark3"></i> <span>Pill example</span></span></td>
      </tr>
  </tbody>
</table>`
          }

        ],
        modifiers: []
      }
    ]);

    
    this.component.description = `<p class="font-up-2">Displays a list of related data. The title or label for the data is displayed on the left with the data to the right.</p>`;

  }

  activate() {

  }
}

export = Datalist;