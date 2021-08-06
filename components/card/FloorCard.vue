<template>
  <div v-if="card.length" :class="$style.mold">
    <div class="d-flex justify-content-between align-items-center h-100 mx-auto px-5">
      <div>
        <span>$</span>
        <span>{{ amount }}</span>
      </div>
      <div>Basket</div>
      <div class="d-flex align-items-center">
        <div :class="$style.quantity" class="rounded-circle mr-1">
          <span>{{ card.length }}</span>
        </div>
        <div>
          <img src="~/assets/image/shopping-cart.png" alt="سبد خرید">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FloorCard',
  computed: {
    ...mapGetters({
      card: 'card/card',
      amount: 'card/amount'
    })
  }
}
</script>

<style lang="scss" module>
@import "floor-card";
</style>
