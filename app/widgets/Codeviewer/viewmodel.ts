import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import * as Prism from 'prismjs';
import * as Clipboard from 'clipboard';
import * as serialize from 'serialize-javascript';
import {
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption
} from '../../interfaces';

enum codeBases {
  HTML,
  Widget
}

class CodeViewer {

  public component: Component2;
  public selectedVariation: KnockoutObservable<ComponentVariations2> = ko.observable();
  public selectedCodeBase: KnockoutObservable<ComponentCodeBase> = ko.observable();
  public codeStr: KnockoutObservable<string> = ko.observable("");
  public previewStr: KnockoutObservable<string> = ko.observable("");

  constructor() {
    let self: CodeViewer = this;

  }

  activate(settings: any) {
    let self: CodeViewer = this;
    let clip = new Clipboard("#copy-button");



    if (settings.component) {
      this.component = settings.component as Component2;

      console.log("Viewing component: ");
      console.log(this.component);


      //on codebase selection change
      this.selectedCodeBase.subscribe((newCodebase) => {

        //set code string
        self.codeStr(self.selectedCodeBase().code);
        self.createCodeStr();

        //add selected modifiers
        self.selectedVariation().modifiers.forEach((modifier: ComponentModifier) => {
          modifier.selectedOption.subscribe((_newModifier) => {
            
            self.createCodeStr();
            
          });
          modifier.selectedOption(modifier.options[0]);
        });

      });

      //on selected component variation change
      this.selectedVariation.subscribe((newValue) => {
        console.log(newValue);
        
        self.selectedCodeBase(newValue.codeBases[0]);
        
        // newValue.modifiers.forEach((modifier) => {
        //   modifier.selectedOption.subscribe((_newValue) => {
            
        //     self.createCodeStr();
            
        //   });
        //   modifier.selectedOption(modifier.options[0]);
        // });

      });


      //set intitial selection
      this.selectedVariation(this.component.variations[0]);

    }
    else {
      throw "Required settings object missing: 'component";
    }

  }

  public compositionComplete() {
  }

  //generate the component code string
  public createCodeStr():void {
    let self: CodeViewer = this;
    if(self.selectedCodeBase()) {
      let tempStr = self.selectedCodeBase().code;
      

      //set html string for component preview section
      self.previewStr(tempStr);

      //if codebase is durandal widget
      if(self.selectedCodeBase().name == "widget") {

        //replace modifier merge fields
        self.selectedVariation().modifiers.forEach((_modifier:ComponentModifier) => {
          if(_modifier.selectedOption()) {
            tempStr = tempStr.replace(new RegExp(_modifier.mergeField, 'g'), _modifier.selectedOption().modifier == "" ? '' : `, "${_modifier.name.toLowerCase()}": "${_modifier.selectedOption().modifier}"`);
          }
        });

        //set html string for component preview section
        self.previewStr(tempStr);

        //if widget - process widget bindings
        ko.applyBindingsToDescendants({
        }, document.getElementById("preview"));

      }
      else {
        
        //else if codebase is HTML
        //replace modifier merge fields
        self.selectedVariation().modifiers.forEach((_modifier:ComponentModifier) => {
          if(_modifier.selectedOption()) {
            tempStr = tempStr.replace(new RegExp(_modifier.mergeField, 'g'), _modifier.selectedOption().modifier == "" ? '' : ` ${_modifier.selectedOption().modifier}`);
          }
        });

        //set html string for component preview section
        self.previewStr(tempStr);
      }


      //add code highlighting for code view section
      self.codeStr(Prism.highlight(tempStr, Prism.languages.markup));

      console.log(self.codeStr());
    }
  }

}

export = CodeViewer;