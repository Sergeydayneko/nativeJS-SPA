import { WFMComponent } from "../../framework/index";

class AppHeader extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
    <nav class="indigo">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo left">Native JS</a>
          <ul class="right">
            <li><a href="#">Главная</a></li>
            <li><a href="#tabs">Новости</a></li>
          </ul>
        </div>
    </nav>
    `
})