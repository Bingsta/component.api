import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { InputConfiguration } from 'interfaces';

class TextInputField {

  public config: KnockoutObservable<InputConfiguration>;
  public addOnHTML: KnockoutObservable<string> = ko.observable('');

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
      if(this.config().step==null) {
        this.config().step=null;
      }
      if(this.config().datalist==null) {
        this.config().datalist = null;
      }

      if(this.config().addon) {
        switch(this.config().type) {
          case "text":
          this.addOnHTML(`<i class="icon icon-keyboard"/></i>`);
          break;
          case "email":
          this.addOnHTML(`@`);
          break;
          case "search":
          this.addOnHTML(`<i class="icon icon-search3"/></i>`);
          break;
          case "number":
          this.addOnHTML(`<i class="icon icon-calculator"/></i>`);
          break;
          case "range":
          this.config().addon=false;
          this.addOnHTML('');
          break;
          case "password":
          this.addOnHTML(`*`);
          break;
          case "tel":
          this.addOnHTML(`<i class="icon icon-phone2"/></i>`);
          break;
          case "url":
          this.addOnHTML(`www`);
          break;
          case "color":
          this.config().addon=false;
          this.addOnHTML('');
          break;
          case "file":
          this.config().addon=false;
          this.addOnHTML('');
          break;
        }
      }
      else {
        this.config().addon=false;
      }
    }
    else {
      throw "Missing configuration file"
    }
  }
}

export = TextInputField;