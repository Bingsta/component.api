import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { ContactBlockConfiguration, ContactConfiguration } from 'interfaces';

class ContactBlock {

  public config: KnockoutObservable<ContactBlockConfiguration>;
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

    }
    else{
      throw "Missing configuration file"
    }
  }

  private getContact(id:string): ContactConfiguration {
    let contactFound: boolean = true;

    if(contactFound) {
      return {
        id: '983292',
        name: 'Testy Test',
        telephone: '072872367',
        email: 'testy.test@test.email.com'
      }
    }
    else {
      throw "Unable to find contact by id"
    }
  }

}

export = ContactBlock;