import state from "./state"
import  * as action from "./action"
import * as getters from "./getters"
import * as mutations  from "./mutations"

const myCustomModule = {
    namespaced: true,
    action,
    getters,
    mutations,
    state
}

export default myCustomModule