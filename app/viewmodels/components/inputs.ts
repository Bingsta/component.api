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
      ])
    }

    activate() {
    }
}

export = Inputs;