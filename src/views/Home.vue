<template>
  <div class="container">
    <div class="row mt-3 justify-content-end">
      <div class="col-md-6">
        <select class="form-select" v-model="search">
          <option value="">全部景色</option>
          <option value="海景">海景</option>
          <option value="陸景">陸景</option>
        </select>
      </div>
    </div>
    <ul class="row">
      <Cards :cards="filterCards"></Cards>
    </ul>
  </div>
</template>

<script>
import Cards from '@/components/Card.vue'
export default {
  data () {
    return {
      search: '',
      cards: []
    }
  },
  components: {
    Cards
  },
  methods: {
    getData () {
      /* 串接 api */
      const url = 'https://mocki.io/v1/ad12157e-d4b0-4c37-8a2a-0fa883880b87'
      this.$http.get(url)
        .then((res) => {
          this.cards = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    filterCards () {
      /* 下拉選單：利用 computed 篩選 api 資料 */
      return this.cards.filter((item) => {
        return item.type.match(this.search)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
