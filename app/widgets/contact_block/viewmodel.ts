import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { ContactBlockConfiguration, ContactConfiguration } from 'interfaces';

class Contact {

  public config: KnockoutObservable<ContactBlockConfiguration>;
  public themeCSS: KnockoutComputed<string>;

  public contact: KnockoutObservable<ContactConfiguration>;

  constructor() {
    
  }
  
  activate(settings:any) {
    //add configuration file
    if(settings.config){
      this.config = ko.observable(settings.config);
      console.log(">>>>>>>>>>>>>>>> here")
      if(this.config().contact) {
        this.contact = ko.observable(this.config().contact);
      }
      else if(this.config().id) {
        this.contact = ko.observable(this.getContact(this.config().id))
      }
      else {
        throw "Missing contact information. Requires an object or id string."
      }

      //add computed
      this.themeCSS = ko.computed(() => {
        //return the theme css
        switch(this.config().theme) {
          case 'warning':
          return 'alert-warning';
          case 'success':
          return 'alert-success';
          case 'danger':
          return 'alert-danger';
          default:
          return 'alert-info';
        }
      });

    }
    else{
      throw "Missing configuration file"
    }
  }

  private getContact(id:string): ContactConfiguration {
    return {
      id: '983292',
      name: 'Testy Test',
      telephone: '072872367',
      email: 'testy.test@test.email.com'
    }
  }

}

export = Contact;