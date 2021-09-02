<template>
  <li class="col-md-4 mt-2" v-for="card in cards" :key="card">
    <div class="card border-0 shadow-sm">
      <a href="javascript:;" class="overflow-hidden">
        <img :src="card.url" class="card-img-top" alt="card-img">
      </a>
      <div class="card-body">
        <h5 class="card-title">{{ card.type }}</h5>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  dataL () {
    return {
      cardData: ''
    }
  },
  props: ['cards'],
  watch: {
    cards () {
      this.cardData = this.cards
    }
  }
}
</script>
