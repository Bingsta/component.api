import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { DropdownButtonComponentConfiguration } from 'interfaces';

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
        else {
            throw "Missing configuration file"
        }
    }


}

export = Splitbutton;