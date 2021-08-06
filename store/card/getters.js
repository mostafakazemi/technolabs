const card = state => state.card
const amount = (state) => {
  let sum = 0
  state.card.forEach((product) => {
    console.log(product.quantity * product.price)
    sum += product.quantity * product.price
  })
  return sum
}

export default {
  card,
  amount
}
