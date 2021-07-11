import {firebaseDb, firebaseStorage,} from "./firebase"

export default {
  addProductApi,
  getProductsApi,
}

function addProductApi(product) {
  let id = product.id
  firebaseDb.doc(`products/${product.category}/product/ ${id}`).set(product)
}

async function getProductsApi(category) {
  let section = []
  let contract = category.value
  await firebaseDb.collection(`products/${category}/product/`).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        section.push(doc.data())
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return section

}
