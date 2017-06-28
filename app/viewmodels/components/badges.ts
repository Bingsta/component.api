import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  ViewerComponentModel, 
  ComponentStyle, 
  ComponentStyleCollection,
  AccordianItem 
} from '../../interfaces';

class Badges {

public components: KnockoutObservableArray<ViewerComponentModel> = ko.observableArray([
    new ViewerComponentModel(
      'Base', 
      '<span class="badge">42</span>',
      [
      ]
    )
  ]);


  constructor() {

  }

  activate() {
    
  }
}

export = Badges;