const ADD_TO_CARD = (state, product) => {
  const index = state.card.findIndex(item => item.id === product.id)
  if (index > -1) {
    state.card[index].quantity++
  } else {
    state.card.push({
      id: product.id,
      price: product.price,
      quantity: 1
    })
  }
}

const SUB_FROM_CARD = (state, productId) => {
  const index = state.card.findIndex(product => product.id === productId)
  if (index > -1) {
    const quantity = --state.card[index].quantity
    if (!quantity) { state.card.splice(index, 1) }
  }
}

export default {
  ADD_TO_CARD,
  SUB_FROM_CARD
}
