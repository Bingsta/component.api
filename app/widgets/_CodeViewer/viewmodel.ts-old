import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import * as Prism from 'prismjs';
import * as Clipboard from 'clipboard';
import * as serialize from 'serialize-javascript';
import { 
  Component, 
  ComponentVariations, 
  HTMLComponentVariation,
  CSSModifiers,
  CSSModifer,
  WidgetComponentVariation,
  WidgetConfiguration,
  WidgetConfigurationOption,
  AccordianItem 
} from '../../interfaces';

enum codeBases {
    HTML,
    Widget
}

console.log();

class _CodeViewer {

    public component: Component;

    public activeVariation: KnockoutObservable<ComponentVariations> = ko.observable(null);

    public selectedCodeBase: KnockoutObservable<number> = ko.observable(0);

    public previewHTML: KnockoutObservable<string> = ko.observable('');

    public codeHTML: KnockoutObservable<string> = ko.observable('');

    public widgetConfiguration: any = null;

    public previewNode: HTMLElement;

    constructor(){
        let self:_CodeViewer = this;
        
        console.log(">>>>>>>>>>>>> serialize");
        console.log(serialize);

        this.activeVariation.subscribe((newVariation) => {
            alert(newVariation);
            if(self.selectedCodeBase() == codeBases.HTML){
                self.previewHTML(newVariation.HTML.code);
            }
            else if(self.selectedCodeBase() == codeBases.Widget) {
              this.setWidgetConfigOptions();
              //self.renderWidgetAndApplyBindings();
            }
        });

        this.selectedCodeBase.subscribe((newCodeBase) => {
            if(newCodeBase == codeBases.HTML) {
                self.previewHTML(self.activeVariation().HTML.code);
            }
            else if(newCodeBase == codeBases.Widget) {
              //add widget code to page
              this.setWidgetConfigOptions();
              //self.renderWidgetAndApplyBindings();
                
            }
        });

        this.previewHTML.subscribe((newCode) => {
            self.codeHTML(Prism.highlight(newCode, Prism.languages.markup));
        });
    }

    activate(settings: any) {
        
        let clip = new Clipboard("#copy-button");
    
        console.log("clip>>>>>>>>");
    
        console.log(clip);
        if(settings.component) {
            this.component = settings.component as Component;

            console.log("Viewing component: ");
            console.log(this.component);

            this.activeVariation(this.component.variations[0]);

            console.log("Currently viewing variation:")
            console.log(this.activeVariation());

        }
        else {
            throw "Required settings object missing: 'component";
        }
    }

    public compositionComplete() {
        this.previewNode = document.getElementById("preview");
    }

    public getVariationsForAccordian(): KnockoutObservableArray<AccordianItem> {
        let AccordianItems: KnockoutObservableArray<AccordianItem>;
        let item: AccordianItem = {
            open: ko.observable(true),
            header: {
                title: "Variations"
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
                    items: this.component.variations,
                    selectedItem: ko.observable(),
                    parent: this,
                    activate: function() {
                        this.selectedItem(this.items[0]);
                        this.parent.activeVariation(this.items[0]);

                        this.selectedItem.subscribe((newItem: any) => {
                            this.parent.activeVariation(newItem);
                            console.log(this.parent.activeVariation());
                        });
                    }
                }
            }
        };
        AccordianItems = ko.observableArray([item]);
        return AccordianItems;
    }

    public getCodeBaseAccordianItems(): KnockoutObservableArray<AccordianItem> {
        let AccordianItems: KnockoutObservableArray<AccordianItem>;

        AccordianItems = ko.observableArray([
            {
                open: ko.observable(true),
                header: {
                    title: "Code base"
                },
                body: {
                    template: ko.observable(`
                    <ul class="list-unstyled" data-bind="foreach: items">
                        <li class="radio">
                            <label><input type="radio" name="options-code-base" data-bind="checkedValue: $data, checked: $parent.selectedItem"> <span data-bind="text:name"></span></label>
                        </li>
                    </ul>
                    `),
                    viewmodel: {
                        items: [
                            {
                                name: "HTML",
                                base: codeBases.HTML
                            },
                            {
                                name: "Widget",
                                base: codeBases.Widget
                            }
                        ],
                        selectedItem: ko.observable(),
                        parent: this,
                        activate: function() {
                            console.log(">>>>>>>>>>>>>>")
                            this.selectedItem(this.items[0]);

                            this.selectedItem.subscribe((newItem: any) => {
                                this.parent.selectedCodeBase(newItem.base);
                                console.log("code base changed: " + this.parent.selectedCodeBase());
                            });
                        }
                    }
                }
            }
        ]);

        return AccordianItems;
    }

    public getHTMLModifiersAccordianItems(): KnockoutObservableArray<AccordianItem> {
        let AccordianItems: KnockoutObservableArray<AccordianItem> = ko.observableArray([]);
        console.log(">>>>>>>>>>>>>>>>>this.activeVariation()");
        console.log(this.activeVariation());

        this.activeVariation().HTML.modifiers.forEach((modifierGroup) => {
            AccordianItems().push({
                open: ko.observable(true),
                header: {
                    title: modifierGroup.name
                },
                body: {
                    template: ko.observable(`
                    <ul class="list-unstyled" data-bind="foreach: items">
                        <li class="radio">
                            <label><input type="radio" data-bind="attr: { name: 'options-' + $parent.name }, checkedValue: $data, checked: $parent.selectedItem"> <span data-bind="text:name"></span></label>
                        </li>
                    </ul>
                    `),
                    viewmodel: {
                        name: modifierGroup.name,
                        items: modifierGroup.modifiers,
                        selectedItem: ko.observable(),
                        parent: this,
                        activate: function() {
                            console.log(">>>>>>>>>>>>>>");
                            this.selectedItem(this.items[0]);

                            this.selectedItem.subscribe((newItem: any) => {
                                console.log(">>>> modifier changed")
                                this.parent.renderModifierStyles(this.items, newItem, this.parent);
                            });
                        }
                    }
                }
            })
        });

        return AccordianItems;
    }

    public getWidgetModifiersAccordianItems(): KnockoutObservableArray<AccordianItem> {
        let AccordianItems: KnockoutObservableArray<AccordianItem> = ko.observableArray([]);
        let selectedModifiers: Array<any> = [];

        this.activeVariation().Widget.config.forEach((config, index) => {
          selectedModifiers.push({
            name: config.name,
            selected: null
          });
            AccordianItems().push({
                open: ko.observable(true),
                header: {
                    title: config.name
                },
                body: {
                    template: ko.observable(`
                    <ul class="list-unstyled" data-bind="foreach: items">
                        <li class="radio">
                            <label><input type="radio" data-bind="attr: { name: 'options-' + $parent.name }, checkedValue: $data, checked: $parent.selectedItem"> <span data-bind="text:name"></span></label>
                        </li>
                    </ul>
                    `),
                    viewmodel: {
                        name: config.name,
                        items: config.options,
                        selectedItem: ko.observable(),
                        parent: this,
                        selectedModifiers: selectedModifiers,
                        activate: function() {
                            console.log(">>>>>>>>>>>>>>");
                            this.selectedItem(this.items[0]);
                            
                            this.selectedItem.subscribe((newItem: any) => {
                                this.selectedModifiers[index].selected = newItem;
                                console.log(">>>> config changed");
                                this.parent.setWidgetConfigOptions(this.selectedModifiers);
                            });
                        }
                    }
                }
            })
        });

        return AccordianItems;
    }

    public renderModifierStyles(items: Array<CSSModifer>, option: CSSModifer, model: _CodeViewer) {
        var item:HTMLButtonElement = document.getElementById("preview").children[0] as HTMLButtonElement;
        
        items.forEach((_option: any) => {
            if(_option.css != ""){
                item.classList.remove(_option.css);
            }
        });
        
        if(option.css != "") {
            item.classList.add(option.css);
        }

        model.previewHTML(item.outerHTML);
    }

    public setWidgetConfigOptions(selectedModifiers?: Array<any>) {
      //build config string from selectedModifer
      var str: string = '{';

      //set default options
      this.activeVariation().Widget.defaultOptions.forEach((option) => {
          str += `"${option.name.toLowerCase()}": "${option.value}",`;
      });

      //set user selected config options
      if(selectedModifiers) {
        selectedModifiers.forEach((modifier) => {
          if(modifier.selected) {
            str += `"${modifier.name.toLowerCase()}": "${modifier.selected.value}",`;
          }
        });
      }

      //remove trailing comma
      str = str.substring(0, (str.length - 1));

      str += `}`;
      
      let obj = this.parseWidgetOptions(str);

      this.widgetConfiguration = obj;
      
      this.renderWidgetAndApplyBindings();
    }

    public renderWidgetAndApplyBindings() {
      const HTML = this.activeVariation().Widget.code.replace('#widgetConfiguration#', this.stringifyOptions(this.widgetConfiguration));
      
      this.previewHTML(HTML);
      //process widget bindings
      ko.applyBindingsToDescendants({
      }, document.getElementById("preview"));
    }

    public parseWidgetOptions(strToParse: string): any {
      return JSON.parse(strToParse);
    }

    public stringifyOptions(objToStringify: any): string {
      return JSON.stringify(objToStringify);
    }
}

export = _CodeViewer;