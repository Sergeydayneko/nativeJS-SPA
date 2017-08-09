import { WFMComponent } from "../../framework/index";
import { router } from "../../framework/tools/router";

class HomePageComponent extends WFMComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .js-link': 'goToTabs',
            'click .moreInfo': 'goToInfo'
        }
    }

    //реализуем жизненный цикл с колбэкаи
    onInit() {
        console.log('Component init')
    }

    afterInit() {
        console.log("Component after init")
    }

    goToTabs(event) {
        event.preventDefault()
        router.navigate('tabs')
    }

    goToInfo(event) {
        event.preventDefault()
        router.navigate('info')
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
    <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="images/office.jpg">
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Vic varis magna<i class="material-icons right">more_vert</i></span>
            <p><a href="#info">See more</a></p>
        </div>
        <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
            <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
    </div>
      `
})