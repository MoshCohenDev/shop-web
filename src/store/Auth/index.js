import state from './state'
import getters from "src/store/category/getters";
import mutations from "src/store/category/mutations";
import actions from "src/store/category/actions";

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
