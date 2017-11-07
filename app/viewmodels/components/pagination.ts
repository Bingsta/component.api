import * as ko from 'knockout';
import * as system from 'durandal/system';
import * as app from 'durandal/app';
import { 
  Component2,
  ComponentVariations2,
  ComponentCodeBase,
  ComponentModifier,
  ComponentModifierOption
} from 'interfaces';

class Pagination {

    public component: Component2;

    constructor() {

      this.component = new Component2("Badges", [
        {
          name: "Base",
          codeBases: [
            {
              name: "HTML",
              code: `<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>...</li>
    <li><a href="#">10</a></li>
    <li></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true" class="icon icon-arrow-left3"></span>
      </a>
    </li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true" class="icon icon-arrow-right3"></span>
      </a>
    </li>
  </ul>
</nav>`
            }
          ],
          modifiers:[]
        }
      ]);
    }

    activate() {
        
    }
}

export = Pagination;