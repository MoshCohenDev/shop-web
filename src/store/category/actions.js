import db from '../../middlewere/database'

export default {
  async addingProduct({commit}, data) {
    await db.addProductApi(data)
    commit('addProductByCategory', data)
  },
  async getProducts({commit}, category) {
    const data = await db.getProductsApi(category)
    debugger
    commit('setProducts', data)
  },
  setToFavoritePage({commit}, item) {
    commit('SetFavorite', item)
  }
}
