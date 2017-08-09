import { WFMComponent } from "../../framework/index";

class InformationPageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }
}


export const informationPageComponent= new InformationPageComponent({
    selector: 'app-information-page',
    template: `
    <div class="col s12 m8 offset-m2 l6 offset-l3">
        <div class="card-panel grey lighten-5 z-depth-1">
          <div class="row valign-wrapper">
            <div class="col s2">
              <img src="images/chihu.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
            </div>
            <div class="col s10">
              <span class="black-text">
                Аналогичной фразой является фраза "Путь в тысячу ли начинается с первого шага" ... Лао Цзы
              </span>
            </div>
          </div>
        </div>
    </div>
    `
})