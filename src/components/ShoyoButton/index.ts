import { registerComponent } from '@/utils/plugins';
import { App as Vue, Plugin } from "vue";
import ShoyoButton from "./ShoyoButton.vue";


const Plug: Plugin = {
    install(app: Vue) {
        registerComponent(app, ShoyoButton)
    }
}

export default Plug;
export { ShoyoButton }