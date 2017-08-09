import { WFMComponent } from "../../framework/index";

class AppFooter extends WFMComponent {
    constructor(config) {
        super(config)
    }
}

export const appFooter = new AppFooter({
    selector: 'app-footer',
    template: `
     <footer class="page-footer indigo">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">Необходимая информация для нижней части приложения</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Справочная информация</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Туда</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Сюда</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Направо</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">В бок</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2017 Native SPA
            <a class="grey-text text-lighten-4 right" href="#!">More Links!!!</a>
            </div>
          </div>
        </footer>
    `
})