import { createApp } from "vue";
import { createPinia } from "pinia";

export default class VueCreate {

    /**
     *
     * @param params
     * name: String (имя = id компонента для иницилизации)
     * component: VueComponent (компонент vue)
     * domCreate: Boolean (создание новобого элемента дом)
     */
    init(params) {
        const options = {
            name: params.name,
            component: params.component,
            domCreate: params.domCreate
        }

        if (options.domCreate === true) this.createDom(options.name);

        this.vueRender(options.component, `#${options.name}`);
    }

    createDom(name) {
        const form = document.createElement('div');
        form.setAttribute('id', name);
        document.body.appendChild(form);
    }

    vueRender(component, name) {
        createApp(component)
            .use(createPinia())
            .mount(name);
    }
}
