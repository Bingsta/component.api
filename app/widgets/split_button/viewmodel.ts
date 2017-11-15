import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DropdownButtonComponentConfiguration } from '../../interfaces';

class Splitbutton {

    public config: KnockoutObservable<DropdownButtonComponentConfiguration>;
    public themeCSS: KnockoutComputed<string>;
    public sizeCSS: KnockoutComputed<string>;

    constructor() {

    }

    activate(settings: any) {
        //add configuration file
        if (settings.config) {
          this.config = ko.observable(settings.config);
          
            //check config values
          if(!this.config().button.content){
            console.error('Missing required content value on button');
            throw "Missing required content value on button";
          }
          if(!this.config().button.id){
            console.error('Missing required ID value on button');
            this.config().button.id = '';
          }
          if(!this.config().menu){
            console.error('Missing required menu object on dropdown button');
            throw "Missing required menu object on dropdown button";
          }

          //set labelledby value for the menu
          this.config().menu.labelledby = this.config().button.id + "__menu";
          

          //add computed
          this.themeCSS = ko.computed(() => {
            //return the theme css
            switch(this.config().button.theme) {
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
            switch(this.config().button.size) {
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
        else {
            throw "Missing configuration file"
        }
    }


}

export = Splitbutton;