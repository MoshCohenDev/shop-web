import {LocalStorage} from "quasar";
export default {
  addProductByCategory(state, data) {
    state.Products.push(data)
    LocalStorage.set('arr', data)
  },
  setProducts(state, data) {
    state.Products = data
  },
  SetFavorite(state, product) {
    const item = state.Products.find(element => element.id === product.id)
    item.favorite = !item.favorite
    debugger
    state.favoriteProduct.push(item)
  }
}
