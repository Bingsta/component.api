import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { ButtonComponentConfiguration } from 'interfaces';

class Button {

  public config: KnockoutObservable<ButtonComponentConfiguration>;
  public themeCSS: KnockoutComputed<string>;
  public sizeCSS: KnockoutComputed<string>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file

    //check required values
    if(settings.config){
      this.config = ko.observable(settings.config);

      if(!this.config().content){
        console.error('Missing required content value on button');
        throw "Missing required content value on button"
      }
      if(!this.config().id){
        console.error('Missing required ID value on button');
        this.config().id = '';
      }
      if(!this.config().action){
        console.error('Missing required content value on button');
        throw "Missing required content value on button"
      }

      //add computed
      this.themeCSS = ko.computed(() => {
        //return the theme css
        switch(this.config().theme) {
          case 'primary':
          return 'btn-primary';
          case 'accent':
          return 'btn-accent';
          case 'warning':
          return 'btn-warning';
          case 'success':
          return 'btn-success';
          case 'danger':
          return 'btn-danger';
          case 'info':
          return 'btn-info';
          default:
          return 'btn-default';
        }
      });

      this.sizeCSS = ko.computed(() => {
        //return the size css
        switch(this.config().size) {
          case 'large':
          return 'btn-lg';
          case 'small':
          return 'btn-sm';
          case 'extra-small':
          return 'btn-xs';
          default: 
          return '';
        }
      });


    }
    else{
      throw "Missing configuration file"
    }
  }


}

export = Button;