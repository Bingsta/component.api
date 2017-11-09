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

class Forms {

  public component: Component2;

  constructor() {
    this.component = new Component2("Forms", [
      {
        name: "Base",
        codeBases: [
          {
            name: "widget",
            code: `<form name="rentDetails">
  <h2>Rent payments</h2>
  <!-- ko widget: { 
    kind: 'inputs/number-input-field',
    config: {
      label: "Rent amount £",
      input: {
        id:'rentAmountInput',
        value: "",
        placeholder: "Enter rent amount" ,
        name: 'rentAmountInput',
        form: 'rentDetails',
        tabindex: 1,
        autofocus: true,
        required: true
      }
    }
  }--><!-- /ko-->
  
      <!-- ko widget: { 
      kind: 'inputs/select-input-field', 
      config: {
        label: "Payment period",
        input: {
          id:'paymentPeriodInput',
          name: 'paymentPeriodInput',
          form: 'rentDetails',
          tabindex: 2,
          required:true,
          options: [
            { value: '1', title: 'Weekly' },
            { value: '2', title: 'Per calendar month' },
            { value: '3', title: 'Quarterly' },
            { value: '4', title: 'Anually' }
          ]
        }
      }
    }--><!-- /ko-->
    <!-- ko widget: { 
      kind: 'inputs/select-input-field', 
      config: {
        label: "Payment day",
        input: {
          id:'paymentDayInput',
          name: 'paymentDayInput',
          form: 'rentDetails',
          tabindex: 3,
          required:false,
          options: [
            { value: '1', title: 'Monday' },
            { value: '2', title: 'Tuesday' },
            { value: '3', title: 'Wednesday' },
            { value: '4', title: 'Thursday' },
            { value: '5', title: 'Friday' },
            { value: '6', title: 'Saturday' },
            { value: '7', title: 'Sunday' }
          ]
        }
      }
    }--><!-- /ko-->
    
  
  <!-- ko widget: { 
    kind: 'inputs/textarea-input-field', 
    config: {
      label: "Notes",
      input: {
        id:'notesInput',
        value: "",
        placeholder: "Enter some notes" ,
        rows: 6,
        name: 'notesInput',
        form: 'rentDetails',
        tabindex: 4
      }
    }
  }--><!-- /ko-->

  <!-- ko widget: { 
    kind: 'inputs/fixed-text-field', 
    config: {
      label: "Difference",
      text: "3 day, £45.90"
    }
  }--><!-- /ko-->

  <!-- ko widget: { 
    kind: 'inputs/radio-group-input-field', 
    config: {
      label: "",
      input: {
        name: 'radioExample',
        form: 'inputtest',
        options: [
          {
            id: 'consolidatePayments',
            title: 'Consolidate payments',
            value: '1',
            tabindex: 6
          },
          {
            id: 'splitPayments',
            title: 'Split payments',
            value: '2',
            tabindex: 7
          }
        ]
      }
    }
  }--><!-- /ko-->
</form>`
          }
        ],
        modifiers:[]
      }
    ]);
  }

  activate() {
    let huh = ``
  }
}

export = Forms;