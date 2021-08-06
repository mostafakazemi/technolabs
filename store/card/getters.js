const card = state => state.card
const amount = (state) => {
  let sum = 0
  state.card.forEach((product) => {
    sum += product.quantity * product.price
  })
  return sum
}

export default {
  card,
  amount
}
