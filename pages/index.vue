<template>
  <div :class="$style['template-mold']" class="mx-auto d-flex flex-column align-items-center">
    <header class="text-center">
      <div :class="$style['logo-mold']" class="d-flex align-items-center justify-content-center p-1">
        <div>
          <!--        Api image url was not found-->
          <img src="https://i.postimg.cc/76w7frGZ/flashbox-logo.png" alt="logo" class="img-fluid">
        </div>
      </div>
      <div class="font-weight-bold" :class="$style.name">
        {{ data.name }}
      </div>
      <div class="d-flex justify-content-center" :class="$style['rate-mold']">
        <span>3.75</span>
        <img src="~/assets/image/stars.png" alt="3.75" class="mx-1">
        <span>160</span>
      </div>
      <div :class="$style.address" class="d-flex justify-content-center align-items-center">
        {{ data.address }}
        <div class=" ml-1">
          <img src="~/assets/image/marker.png" alt="آدرس">
        </div>
      </div>
    </header>
    <section class="d-flex flex-wrap justify-content-between">
      <product-card
        v-for="product in products"
        :key="`product-${product.id}`"
        :class="$style['product-mold']"
        :product="product"
      />
    </section>
    <floor-card />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from '~/components/product/ProductCard.vue'
import FloorCard from '~/components/card/FloorCard'

export default {
  name: 'HomePage',
  components: { ProductCard, FloorCard },
  data () {
    return {
      data: {
        name: undefined,
        address: undefined
      }
    }
  },
  async fetch () {
    const response = await fetch('https://run.mocky.io/v3/a8d03157-a077-44db-9746-695e18a7549e').then(res => res.json())
    this.data.name = response.name
    this.data.address = response.address
    await this.$store.dispatch('products/updateProducts', response.products)
  },
  computed: {
    ...mapGetters({
      products: 'products/products'
    })
  }
}
</script>

<style lang="scss" module>
@import "home-page";
</style>
