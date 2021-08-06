const addToCard = (context, product) => {
  context.commit('ADD_TO_CARD', product)
}
const subFromCard = (context, product) => {
  context.commit('SUB_FROM_CARD', product)
}

export default {
  addToCard,
  subFromCard
}
