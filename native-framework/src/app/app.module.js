import { WFModule } from "../framework/index";
import { appComponent } from "./app.component";
import { appHeader } from "./common/app.header";
import { appRoutes } from "./app.routes";
import { appFooter } from "./common/app.footer"

class AppModule extends WFModule {
    //передали конфиг в конструктор в вфм модуль
    constructor (config){
        super(config)
    }
}

export const appModule = new AppModule ({
    components: [
        appHeader,
        appFooter
    ],

    bootstrap: appComponent,
    routes: appRoutes
})