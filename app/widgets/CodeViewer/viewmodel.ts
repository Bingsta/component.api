import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import * as Prism from 'prismjs';
import { 
  ViewerComponentModel, 
  ComponentStyle, 
  ComponentStyleCollection,
  AccordianItem 
} from '../../interfaces';


class CodeViewer {

  public outputHTML:KnockoutObservable<string> = ko.observable('');

  public componentHTML: KnockoutObservable<string>;
  public componentsAccordian: KnockoutObservableArray<AccordianItem> = ko.observableArray([]); 

  public selectedVariant:KnockoutObservable<ViewerComponentModel> = ko.observable(null);

  public _components: KnockoutObservableArray<ViewerComponentModel>;

  constructor() {
    this.componentHTML = ko.observable('');
    console.log(this);

  }
  
  activate(settings:any) {
    let variantItems: Array<any> = [];
    let self:CodeViewer = this;
    $('.cl-article-guide__tabs').tab();
    this.componentHTML.subscribe((newHTML) => {
      self.outputHTML(Prism.highlight(newHTML, Prism.languages.markup));
    });

    //require settings value components
    if(settings.components) {
      
      this._components = settings.components;

      this.componentsAccordian().push({
        open: ko.observable(true),
        header: {
          title: "Variants"
        },
        body: {
          template: ko.observable(`
            <ul class="list-unstyled" data-bind="foreach: items">
              <li class="radio">
                <label><input type="radio" name="options-variants" data-bind="checkedValue: $data, checked: $parent.selectedItem"> <span data-bind="text:name"></span></label>
              </li>
            </ul>
          `),
          viewmodel: {
            items: this._components(),
            selectedItem: ko.observable(),
            parent: this,
            activate: function() {

              this.selectedItem(this.items[0]);
              this.parent.selectedVariant(this.items[0]);

              this.selectedItem.subscribe((newItem) => {
                this.parent.selectedVariant(newItem);
              });
            }
          }
        }
      });

      this.selectedVariant.subscribe((newValue) => {
        self.componentHTML(newValue.html);
        if(newValue.initialise)
        {
          newValue.initialise();
        }
      });

    }
    else {
      console.error("Module 'CodeViewer': Required setting 'components' missing");
      throw "Module 'CodeViewer': Required setting 'components' missing";
    }
  
  }

  public renderModifierStyles(items: any, option: any, model: CodeViewer) {
    var item:HTMLButtonElement = document.getElementById("preview").children[0] as HTMLButtonElement;
    
    items.forEach((_option: any) => {
      if(_option.className != ""){
        item.classList.remove(_option.className);
      }
    });
    
    if(option.className != "") {
      item.classList.add(option.className);
    }

    model.componentHTML(item.outerHTML);
  }

  public formatAccordianItems(styles: Array<ComponentStyleCollection>):KnockoutObservableArray<AccordianItem> {
    let items:KnockoutObservableArray<AccordianItem> = ko.observableArray([]);
    styles.forEach((style: ComponentStyleCollection) => {
      items().push({
        open: ko.observable(true),
        header: {
          title: style.title
        },
        body: {
          template: ko.observable(`
            <ul class="list-unstyled" data-bind="foreach: items"><li  class="radio"><label>
            <input type="radio" data-bind="attr: { name: 'options-' + $parent.name }, checkedValue: $data, checked: $parent.selectedItem"> <span data-bind="text:name"></span> (<small data-bind="text:'.' + className"></small>)</label></li>
          `),
          viewmodel: {
            name: style.title,
            items: style.items,
            selectedItem: ko.observable(),
            parent: this,
            activate: function() {
              this.selectedItem(this.items[0]);
              this.selectedItem.subscribe((newValue) => {
                //console.log(this.parent);
                this.parent.renderModifierStyles(this.items, newValue, this.parent);
              });

            }
          }
        }
      });
    });
    return items;
  }

}

export  = CodeViewer;