import { router } from "../tools/router";
import { wfm } from "../tools/util";

export class Module {
    constructor(config) {
        //объявление анонимной переменной
        this.components = config.components
        //initial компонент, который надо зарендерить в первую очередь
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start() {
        this.initComponents()
        if(this.routes) this.initRoutes()
    }

    initComponents() {
        this.bootstrapComponent.render()
        //bind(this) передать текущий контекст, с которым нужно выполнять данную функцию
        //чтобы она нашщлась именно в данном классе
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this))
        this.renderRoute()
    }

    renderRoute() {
        let url = router.getUrl()
        let route = this.routes.find(r => r.path === url)

        if(wfm.isUnderfined(route)) {
            route = this.routes.find(r => r.path === '**')
        }

        document.querySelector('router-outlet').innerHTML = `<${route.component.selector}></${route.component.selector}>`
        this.renderComponent(route.component)
    }

    renderComponent(c) {
        if(!wfm.isUnderfined(c.onInit)) c.onInit()
        c.render()
        if(!wfm.isUnderfined(c.afterInit)) c.afterInit()
    }
}