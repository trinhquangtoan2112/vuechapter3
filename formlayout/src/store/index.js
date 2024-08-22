import { createStore } from "vuex"
import user from "./Modules/user"



const store = createStore({
    modules: {
        user
    }
})


export default store