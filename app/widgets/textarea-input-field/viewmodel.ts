import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { TextAreaFieldConfiguration } from '../../interfaces';

class TextInputField {

  public config: KnockoutObservable<TextAreaFieldConfiguration>;

  constructor() {

  }

  activate(settings: any) {
    //add configuration file
    if (settings.config) {
      console.log("Tabs component>>>");
      console.log(settings.config);
      
      this.config = ko.observable(settings.config);

      if(this.config().autofocus==null) {
        this.config().autofocus=false;
      }
      if(this.config().disabled==null) {
        this.config().disabled=false;
      }
      if(this.config().required==null) {
        this.config().required=false;
      }
      if(this.config().spellcheck==null) {
        this.config().spellcheck=false;
      }
      if(this.config().readonly==null) {
        this.config().readonly=false;
      }
      if(this.config().maxlength==null) {
        this.config().maxlength=null;
      }
    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = TextInputField;