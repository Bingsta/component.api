import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { InputConfiguration } from 'interfaces';

class TextInputField {

  public config: KnockoutObservable<InputConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("input component>>>");
      console.log(settings.config);

      this.config = ko.observable(settings.config);
      
      if(this.config().type==null) {
        this.config().type="text";
      }
      if(this.config().autofocus==null) {
        this.config().autofocus=false;
      }
      if(this.config().disabled==null) {
        this.config().disabled=false;
      }
      if(this.config().required==null) {
        this.config().required=false;
      }
      if(this.config().readonly==null) {
        this.config().readonly=false;
      }
      if(this.config().spellcheck==null) {
        this.config().spellcheck=false;
      }
      if(this.config().maxlength==null) {
        this.config().maxlength=null;
      }
      if(this.config().pattern==null) {
        this.config().pattern=null;
      }
      if(this.config().value==null) {
        this.config().value=null;
      }

    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = TextInputField;