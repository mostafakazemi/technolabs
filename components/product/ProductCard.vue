<template>
  <div class="d-flex flex-column align-items-center text-center p-1">
    <div>
      <img :src="product.image" :alt="product.name">
    </div>
    <div :class="$style.name">
      {{ product.name }}
    </div>
    <div>
      <span>$</span>
      <span :class="$style.price">{{ product.price }}</span>
      <span />
    </div>
    <div :class="$style['controller-mold']">
      <div @click="addToCard">
        <span>+</span>
      </div>
      <div><span>{{ quantity }}</span></div>
      <div @click="subFromCard">
        <span>-</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductCard',
  props: {
    product: {
      default: () => {},
      type: Object,
      id: {
        default: null,
        type: Number
      },
      image: {
        default: null,
        type: String
      },
      name: {
        default: null,
        type: String
      },
      price: {
        default: null,
        type: Number
      }
    }
  },
  computed: {
    ...mapGetters({
      card: 'card/card'
    }),
    quantity () {
      const index = this.card.findIndex(product => product.id === this.product.id)
      return index > -1 ? this.card[index].quantity : 0
    }
  },
  methods: {
    addToCard () {
      const product = {
        id: this.product.id,
        price: this.product.price
      }
      this.$store.dispatch('card/addToCard', product)
    },
    subFromCard () {
      this.$store.dispatch('card/subFromCard', this.product.id)
    }
  }
}
</script>

<style lang="scss" module>
@import "product-card";
</style>
