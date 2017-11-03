import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption
} from '../../interfaces';

class InputFields {

    public component: Component2;


    constructor() {
 
      this.component = new Component2("inputs", [
        {
          name: "Inputs",
          codeBases: [
            {
              name: "HTML",
              code: `<div class="input-field">
  <label class="input-field__label">Form label (#type# input example)</label>
  <div class="input-field__input">
    <input type="#type#" class="form-control" placeholder="Hint text">
  </div>
</div>`
            }
          ],
          modifiers: [
            {
              name: "Input type",
              mergeField: "#type#",
              selectedOption: ko.observable(),
              options: [
                {
                  name: "Text input",
                  modifier: "text"
                },
                {
                  name: "Email input",
                  modifier: "email"
                },
                {
                  name: "Search input",
                  modifier: "search"
                },
                {
                  name: "Number input",
                  modifier: "number"
                },
                {
                  name: "Range input",
                  modifier: "range"
                },
                {
                  name: "Date input",
                  modifier: "date"
                },
                {
                  name: "Month input",
                  modifier: "month"
                },
                {
                  name: "Week input",
                  modifier: "week"
                },
                {
                  name: "Time input",
                  modifier: "time"
                },
                {
                  name: "Date & time input",
                  modifier: "datetime-local"
                },
                {
                  name: "Password input",
                  modifier: "password"
                },
                {
                  name: "Telephone input",
                  modifier: "tel"
                },
                {
                  name: "URL input",
                  modifier: "url"
                },
                {
                  name: "Colour input",
                  modifier: "color"
                },
                {
                  name: "File picker",
                  modifier: "file"
                }
              ]
            }
          ]
        },{
          name: "Text area",
          codeBases: [
            {
              name: "HTML",
              code: `<div class="input-field">
  <label class="input-field__label">Form label (textarea example)</label>
  <div class="input-field__input">
    <textarea class="form-control" placeholder="Hint text" rows="4"></textarea>
  </div>
</div>`
            }
          ],
          modifiers: [
          ]
        },{
            name: "Selects",
            codeBases: [
              {
                name: "HTML",
                code: `<div class="input-field">
  <label class="input-field__label">Form label (#type# select input example)</label>
    <div class="input-field__input">
      <select #type# class="form-control">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
  </div>
</div>`
              }
            ],
            modifiers: [
              {
                name: "Input type",
                mergeField: "#type#",
                selectedOption: ko.observable(),
                options: [
                  {
                    name: "Single select",
                    modifier: ""
                  },
                  {
                    name: "Multiple select",
                    modifier: "multiple"
                  }
                ]
              }
            ]
          },
          {
            name: "Inline checkbox/radio groups",
            codeBases: [
              {
                name: "HTML",
                code: `<div class="input-field">
  <div class="input-field__label">Form label (#type# select input example)</div>
  <div class="input-field__input">
    <label>
      <input type="#type#" name="inline#type#Options" id="inline#type#1" class="form-control" value="option1"> Option 1
    </label>
    <label>
      <input type="#type#" name="inline#type#Options" id="inline#type#2" class="form-control" value="option2"> Option 2
    </label>
    <label>
      <input type="#type#" name="inline#type#Options" id="inline#type#3" class="form-control" value="option3"> Option 3
    </label>
  </div>
</div>`
              }
            ],
            modifiers: [
              {
                name: "Type",
                mergeField: "#type#",
                selectedOption: ko.observable(),
                options: [
                  {
                    name: "Radios",
                    modifier: "radio"
                  },
                  {
                    name: "Checkboxes",
                    modifier: "checkbox"
                  }
                ]
              }
            ]
          }
      ])
    }

    activate() {
    }
}

export = InputFields;