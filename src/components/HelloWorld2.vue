<template>
  <div class="hello">
    <h1>{{ currentCustomer.name }}</h1>
    <h2>{{ currentCustomer.nickname }}</h2>
    <input type="button" @click="setValue('111111')" value="Altera Valor">
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions({
      setValue : "product/editProductValue"
    })
  },
  computed: {
    ...mapGetters({
      currentCustomer: 'customer/currentCustomer'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
