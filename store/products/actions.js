const updateProducts = (context, product) => {
  context.commit('UPDATE_PRODUCTS', product)
}

export default {
  updateProducts
}
