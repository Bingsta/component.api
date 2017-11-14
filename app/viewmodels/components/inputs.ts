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

class Inputs {

    public component: Component2;
    public textInputTypes: Array<ComponentModifier> = [
      {
        name: "Type",
        mergeField: "#type#",
        selectedOption: ko.observable(
          {
            name: "Text",
            HTML: "text",
            widget: `"text"`
          }
        ),
        options: [
          {
            name: "Text",
            HTML: "text",
            widget: `"text"`
          },
          {
            name: "Email",
            HTML: "email",
            widget: `"email"`
          },
          {
            name: "Search",
            HTML: "search",
            widget: `"search"`
          },
          {
            name: "Number",
            HTML: "number",
            widget: `"number"`
          },
          {
            name: "Range",
            HTML: "range",
            widget: `"range"`
          },
          {
            name: "Password",
            HTML: "password",
            widget: `"password"`
          },
          {
            name: "Telephone",
            HTML: "tel",
            widget: `"tel"`
          },
          {
            name: "URL",
            HTML: "url",
            widget: `"url"`
          },
          {
            name: "Colour",
            HTML: "color",
            widget: `"color"`
          },
          {
            name: "File",
            HTML: "file",
            widget: `"file"`
          }
        ]
      }
    ];
    public inputOptions: Array<ComponentModifier> = [
      {
        name: "Addon",
        mergeField: "#addon#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: "",
            widget: true
          }
        ]
      },
      {
        name: "Autofocus",
        mergeField: "#autofocus#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " autofocus",
            widget: true
          }
        ]
      },
      {
        name: "Disabled",
        mergeField: "#disabled#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " disabled",
            widget: true
          }
        ]
      },
      {
        name: "Required",
        mergeField: "#required#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " required",
            widget: true
          }
        ]
      },
      {
        name: "Spellcheck",
        mergeField: "#spellcheck#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " spellcheck",
            widget: true
          }
        ]
      },
      {
        name: "Readonly",
        mergeField: "#readonly#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " readonly",
            widget: true
          }
        ]
      }
    ];

    public selectOptions: Array<ComponentModifier> = [
      {
        name: "Multiple",
        mergeField: "#type#",
        selectedOption: ko.observable(
          {
            name: "Single",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "Single selection",
            HTML: "",
            widget: ""
          },
          {
            name: "Multiple selection",
            HTML: "multiple",
            widget: `"multiple"`
          }
        ]
      },
      {
        name: "Autofocus",
        mergeField: "#autofocus#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " autofocus",
            widget: true
          }
        ]
      },
      {
        name: "Disabled",
        mergeField: "#disabled#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " disabled",
            widget: true
          }
        ]
      },
      {
        name: "Required",
        mergeField: "#required#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " required",
            widget: true
          }
        ]
      }
    ];

    public dateOptions: Array<ComponentModifier> = [
      {
        name: "Type",
        mergeField: "#type#",
        selectedOption: ko.observable(
          {
            name: "Date",
            HTML: "date",
            widget: `"date"`
          }
        ),
        options: [
          {
            name: "Date",
            HTML: "date",
            widget: `"date"`
          },
          {
            name: "Time",
            HTML: "time",
            widget: `"time"`
          },
          {
            name: "Date & time",
            HTML: "datetime-local",
            widget: `"datetime-local"`
          },
          {
            name: "Month",
            HTML: "month",
            widget: `"month"`
          },
          {
            name: "Week",
            HTML: "week",
            widget: `"week"`
          }
        ]
      },
      {
        name: "Addon",
        mergeField: "#addon#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: "",
            widget: true
          }
        ]
      },
      {
        name: "Autofocus",
        mergeField: "#autofocus#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " autofocus",
            widget: true
          }
        ]
      },
      {
        name: "Disabled",
        mergeField: "#disabled#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " disabled",
            widget: true
          }
        ]
      },
      {
        name: "Required",
        mergeField: "#required#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " required",
            widget: true
          }
        ]
      },
      {
        name: "Readonly",
        mergeField: "#readonly#",
        selectedOption: ko.observable(
          {
            name: "False",
            HTML: "",
            widget: ""
          }
        ),
        options: [
          {
            name: "False",
            HTML: "",
            widget: ""
          },
          {
            name: "True",
            HTML: " readonly",
            widget: true
          }
        ]
      }
    ];

    constructor() {
 
      this.component = new Component2("inputs", [
        {
          name: "Text inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/text-input', 
  config: {
    id:'test_text',
    value: "",
    placeholder: "Hint text" ,
    name: 'textInputExample',
    form: 'inputtest',
    tabindex: 1#type##autofocus##disabled##required##spellcheck##readonly##addon#
  } 
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<input type="#type#"  class="form-control" placeholder="Hint text" #autofocus##disabled##required##spellcheck##readonly#>`
            }
          ],
          modifiers: this.textInputTypes.concat(this.inputOptions)
        },
        {
          name: "Text inputs with datalist",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/text-input', 
  config: {
    id:'test_text',
    value: "",
    placeholder: "Hint text" ,
    name: 'textInputExample',
    form: 'inputtest',
    tabindex: 1,
    datalist: {
      id:'data-list-test',
      options: [
        { value: 'Bugs Bunny' },
        { value: 'Homer Simpson' },
        { value: 'Mickey Mouse' },
        { value: 'Bart Simpson' },
        { value: 'Charile Brown' },
        { value: 'Fred Flintstone' },
        { value: 'Wile E. Coyote' },
        { value: 'Eric Cartman' },
        { value: 'Daffy Duck' },
        { value: 'Porky Pig' },
        { value: 'Scooby Doo' }
      ]
    }#type##autofocus##disabled##required##spellcheck##readonly##addon#
  } 
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<input type="#type#"  class="form-control" placeholder="Hint text" #autofocus##disabled##required##spellcheck##readonly#>`
            }
          ],
          modifiers: this.textInputTypes.concat(this.inputOptions)
        },
        {
          name: "Textarea inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/textarea-input', 
  config: {
    id:'test_textarea',
    value: "",
    placeholder: "Hint text" ,
    rows: 4,
    name: 'textareaExample',
    form: 'inputtest',
    tabindex: 5#autofocus##disabled##required##spellcheck##readonly#
  }
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<textarea class="form-control" rows="4"#autofocus##disabled##required##spellcheck##readonly#>`
            }
          ],
          modifiers: this.inputOptions
        },
        {
          name: "Select inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/select-input', 
  config: {
    id:'test_selectbox',
    name: 'selectExample',
    form: 'inputtest',
    tabindex: 8,
    options: [
      { value: '1', title: 'Option 1' },
      { value: '2', title: 'Option 2' },
      { value: '3', title: 'Option 3' },
      { value: '4', title: 'Option 4' },
      { value: '5', title: 'Option 5' },
    ]#type##autofocus##disabled##required#
  }
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<select #type# class="form-control"#autofocus##disabled##required#>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
  <option value="4">Option 4</option>
  <option value="1">Option 5</option>
</select>`
            }
          ],
          modifiers: this.selectOptions
        },
        {
          name: "Radio group",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/radio-group-input', 
  config: {
    name: 'radioExample',
    form: 'inputtest',
    options: [
      {
        id: 'radio1',
        title: 'Option 1',
        value: '1',
        tabindex: 9
      },
      {
        id: 'radio2',
        title: 'Option 2',
        value: '2',
        tabindex: 10
      },
      {
        id: 'radio3',
        title: 'Option 3',
        value: '3',
        tabindex: 11
      }
    ]
  } 
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<div class="input-field__radioCheckGroup">
    <label for="radio1">
      <input type="radio" class="form-control" name="radioExample" id="radio1" form="inputtest" tabindex="1" value="1"> <span>Option 1</span>
    </label>

    <label for="radio2">
      <input type="radio" class="form-control" name="radioExample" id="radio2" form="inputtest" tabindex="2" value="2"> <span>Option 2</span>
    </label>

    <label for="radio3">
      <input type="radio" class="form-control" name="radioExample" id="radio3" form="inputtest" tabindex="3" value="3"> <span>Option 3</span>
    </label>
</div>`
            }
          ],
          modifiers: []
        },
        {
          name: "Checkbox group",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/checkbox-group-input', 
  config: {
    name: 'checkExample',
    form: 'inputtest',
    options: [
      {
        id: 'check1',
        title: 'Option 1',
        value: '1',
        tabindex: 9
      },
      {
        id: 'check2',
        title: 'Option 2',
        value: '2',
        tabindex: 10
      },
      {
        id: 'check3',
        title: 'Option 3',
        value: '3',
        tabindex: 11
      }
    ]
  } 
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<div class="input-field__radioCheckGroup">
    <label for="checkbox1">
      <input type="checkbox" class="form-control" name="checkboxExample" id="checkbox1" form="inputtest" tabindex="1" value="1"> <span>Option 1</span>
    </label>

    <label for="checkbox2">
      <input type="checkbox" class="form-control" name="checkboxExample" id="checkbox2" form="inputtest" tabindex="2" value="2"> <span>Option 2</span>
    </label>

    <label for="checkbox3">
      <input type="checkbox" class="form-control" name="checkboxExample" id="checkbox3" form="inputtest" tabindex="3" value="3"> <span>Option 3</span>
    </label>
</div>`
            }
          ],
          modifiers: []
        },{
          name: "Date & time inputs",
          codeBases: [
            {
              name: "widget",
              code: `<!-- ko widget: { 
  kind: 'inputs/date-input', 
  config: {
    id:'date_text',
    value: '',
    name: 'dateInputExample',
    form: 'inputtest',
    tabindex: 6#type##autofocus##disabled##required##readonly##addon#
  }
}--><!-- /ko -->`
            },
            {
              name: "HTML",
              code: `<input type="#type#" class="form-control"#autofocus##disabled##required##readonly#>`
            }
          ],
          modifiers: this.dateOptions
        }
      ]);
      
      this.component.reference = {
        about: `<p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur</p>`,
        cssOptions: [
        ],
        widgetOptions: [
          {
            kind: 'inputs/text-input',
            description: 'asdasdasd',
            options: [
              {
                name: 'type',
                description: 'Selects the HTML input type value.',
                dataType: 'string',
                values: 'text<br/>email<br/>search</br>number</br>range</br>password</br>tel</br>url</br>color</br>file</br>',
                optional: false
              },
              {
                name: 'id',
                description: 'Text which is bound as the HTML element ID',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'name',
                description: 'Text which is bound as the HTML input name attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'form',
                description: 'Text which is bound as the HTML input form attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'tabindex',
                description: 'Text which is bound as the HTML input tabindex attribute',
                dataType: 'number',
                values: 'any',
                optional: false
              },
              {
                name: 'value',
                description: 'Text which is bound as the HTML input value attribute',
                dataType: 'string',
                values: 'any',
                optional: true
              },
              {
                name: 'placeholder',
                description: 'Sets the placeholder or hint text.',
                dataType: 'string',
                values: 'any',
                optional: true
              },
              {
                name: 'autofocus',
                description: 'Forces focus to the input element when initially loaded',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'disabled',
                description: 'Disables the input element',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'required',
                description: 'Marks the input element as a required field',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'readonly',
                description: 'Prevents the value text from being edited.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'spellcheck',
                description: 'Enabled/disables the input spellchecker.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'maxlength',
                description: 'Add a limit to the number of characters that can be entered',
                dataType: 'number',
                values: 'any',
                optional: true
              },
              {
                name: 'pattern',
                description: 'Regular expression string which is used to validate the input.',
                dataType: 'string',
                values: 'any',
                optional: true
              },
              {
                name: 'addon',
                description: 'Adds an icon add on to the input.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'step',
                description: 'Only used for type="number". Forces entry in multiples of the entered value. E.g. 10,20,30,40... etc.',
                dataType: 'number',
                values: 'any',
                optional: true
              },
              {
                name: 'datalist',
                description: 'An object representing a datalist object which will be associated to the input element. Datalists can be used to provide autocomplete functionality.',
                dataType: '<a href="#DataListConfiguration">DataListConfiguration</a>',
                values: 'any',
                optional: true
              }
            ]
          },{
            kind: 'inputs/textarea-input',
            description: 'asdasdasd',
            options: [
              {
                name: 'id',
                description: 'Text which is bound as the HTML element ID',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'name',
                description: 'Text which is bound as the HTML input name attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'form',
                description: 'Text which is bound as the HTML input form attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'tabindex',
                description: 'Text which is bound as the HTML input tabindex attribute',
                dataType: 'number',
                values: 'any',
                optional: false
              },
              {
                name: 'rows',
                description: 'Sets the number of rows that appear without a scrollbar. ',
                dataType: 'number',
                values: 'any',
                optional: false
              },
              {
                name: 'value',
                description: 'Text which is bound as the HTML input value attribute',
                dataType: 'string',
                values: 'any',
                optional: true
              },
              {
                name: 'autofocus',
                description: 'Forces focus to the input element when initially loaded',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'disabled',
                description: 'Disables the input element',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'required',
                description: 'Marks the input element as a required field',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'readonly',
                description: 'Prevents the value text from being edited.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'spellcheck',
                description: 'Enabled/disables the input spellchecker.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'maxlength',
                description: 'Add a limit to the number of characters that can be entered',
                dataType: 'number',
                values: 'any',
                optional: true
              }
            ]
          },{
            kind: 'inputs/select-input',
            description: 'asdasdasd',
            options: [
              {
                name: 'id',
                description: 'Text which is bound as the HTML element ID',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'name',
                description: 'Text which is bound as the HTML input name attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'form',
                description: 'Text which is bound as the HTML input form attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'options',
                description: 'An array of objects representing select options',
                dataType: 'Array<<a href="#OptionConfiguration">OptionConfiguration</a>>',
                values: 'any',
                optional: false
              },
              {
                name: 'tabindex',
                description: 'Text which is bound as the HTML input tabindex attribute',
                dataType: 'number',
                values: 'any',
                optional: false
              },
              {
                name: 'mulitple',
                description: 'Sets whether options select is a single select or multiple select. Defaults to a single select.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'autofocus',
                description: 'Forces focus to the input element when initially loaded',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'disabled',
                description: 'Disables the input element',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'required',
                description: 'Marks the input element as a required field',
                dataType: 'boolean',
                values: 'any',
                optional: true
              }
            ]
          },{
            kind: 'inputs/radio-group-input',
            description: 'asdasdasd',
            options: [
              {
                name: 'name',
                description: 'Text which is bound as the HTML input name attribute for each radio input',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'form',
                description: 'Text which is bound as the HTML input form attribute for each radio input',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'options',
                description: 'An array of objects representing radio inputs',
                dataType: 'Array<<a href="#CheckboxRadioConfiguration">CheckboxRadioConfiguration</a>>',
                values: 'any',
                optional: false
              }
            ]
          },{
            kind: 'inputs/checkbox-group-input',
            description: 'asdasdasd',
            options: [
              {
                name: 'name',
                description: 'Text which is bound as the HTML input name attribute for each checkbox input',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'form',
                description: 'Text which is bound as the HTML input form attribute for each checkbox input',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'options',
                description: 'An array of objects representing checkbox inputs',
                dataType: 'Array<<a href="#CheckboxRadioConfiguration">CheckboxRadioConfiguration</a>>',
                values: 'any',
                optional: false
              }
            ]
          },
          {
            kind: 'inputs/date-input',
            description: 'asdasdasd',
            options: [
              {
                name: 'type',
                description: 'Selects the HTML input type value.',
                dataType: 'string',
                values: 'date<br/>time<br/>datetime-local</br>month</br>week',
                optional: false
              },
              {
                name: 'id',
                description: 'Text which is bound as the HTML element ID',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'name',
                description: 'Text which is bound as the HTML input name attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'form',
                description: 'Text which is bound as the HTML input form attribute',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'tabindex',
                description: 'Text which is bound as the HTML input tabindex attribute',
                dataType: 'number',
                values: 'any',
                optional: false
              },
              {
                name: 'value',
                description: 'Text which is bound as the HTML input value attribute',
                dataType: 'string',
                values: 'any',
                optional: true
              },
              {
                name: 'placeholder',
                description: 'Sets the placeholder or hint text.',
                dataType: 'string',
                values: 'any',
                optional: true
              },
              {
                name: 'autofocus',
                description: 'Forces focus to the input element when initially loaded',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'disabled',
                description: 'Disables the input element',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'required',
                description: 'Marks the input element as a required field',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'readonly',
                description: 'Prevents the value text from being edited.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'max',
                description: 'Sets a maximum value that can be entered.',
                dataType: 'date',
                values: 'any',
                optional: true
              },
              {
                name: 'min',
                description: 'Sets a minimum value that can be entered.',
                dataType: 'date',
                values: 'any',
                optional: true
              },
              {
                name: 'addon',
                description: 'Adds an icon add on to the input.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'step',
                description: 'Only used for type="number". Forces entry in multiples of the entered value. E.g. 10,20,30,40... etc.',
                dataType: 'number',
                values: 'any',
                optional: true
              },
              {
                name: 'datalist',
                description: 'An object representing a datalist object which will be associated to the input element. Datalists can be used to provide autocomplete functionality.',
                dataType: '<a href="#DataListConfiguration">DataListConfiguration</a>',
                values: 'any',
                optional: true
              }
            ]
          }
        ],
        objectReference: [
          {
            name: 'DataListConfiguration',
            description: 'blah blah',
            options: [
              {
                name: 'id',
                description: 'Set the HTML element ID value and links to the input element by setting the input element list value',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'options',
                description: 'An array of objects representing data list options',
                dataType: 'Array<<a href="#DataListOptionConfiguration">DataListOptionConfiguration</a>>',
                values: 'any',
                optional: false
              }
            ]
          },
          {
            name: 'DataListOptionConfiguration',
            description: 'blah blah',
            options: [
              {
                name: 'value',
                description: 'The value of the option',
                dataType: 'string',
                values: 'any',
                optional: false
              }
            ]
          },
          {
            name: 'OptionConfiguration',
            description: 'blah blah',
            options: [
              {
                name: 'title',
                description: 'Text value bound as the text for the option',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'value',
                description: 'Text value bound as the value attribute for the option',
                dataType: 'string',
                values: 'any',
                optional: false
              }
            ]
          },
          {
            name: 'CheckboxRadioConfiguration',
            description: 'blah blah',
            options: [
              {
                name: 'id',
                description: 'Text which is bound as the HTML element ID',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'title',
                description: 'Text value bound as the text for a label element associated to the checkbox/radio input',
                dataType: 'string',
                values: 'any',
                optional: false
              },
              {
                name: 'tabindex',
                description: 'Text which is bound as the HTML input tabindex attribute',
                dataType: 'number',
                values: 'any',
                optional: false
              },
              {
                name: 'checked',
                description: 'Set whether the checkbox/radio input is checked or not. Defaults to false.',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'autofocus',
                description: 'Forces focus to the input element when initially loaded',
                dataType: 'boolean',
                values: 'any',
                optional: true
              },
              {
                name: 'disabled',
                description: 'Disables the input element',
                dataType: 'boolean',
                values: 'any',
                optional: true
              }
            ]
          }
        ]
      };
    }

    activate() {
    }
}

export = Inputs;