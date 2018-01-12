<template>
  <div>
    <div>
      <input type="text" v-model="nameCustomer" placeholder="input name">
    </div>
    <div>
      <button @click = "insertCustomer()"> register </button>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    insertCustomer: function () {
      const URL = '/api/customers'
      var address = {id: '', city: 'surabaya', country: 'indonesia', province: 'riau', street: 'sandang'}
      axios.post(URL, {
        name: this.nameCustomer,
        address: address
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style>

</style>
