<template>
  <div>
    Hey let's learn API
    <button @click = "callApi"> Call API </button>

    <ul>
      <li v-for="(customer, index) in customers" :key="customer.id">
        {{ customer.name }}
        <button @click = "deleteCustomer(customer.id)">Delete</button>
        <button @click = "updateCustomer(customer)">Update</button>
      </li>

    </ul>

    <div>
      <input type="text" v-model="name" placeholder="input name">
    </div>
    <div>
      <button @click = "insertCustomer"> register </button>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Customer',
    data () {
      return {
        customers: []
      }
    },
    methods: {
      callApi () {
        const URL = '/api/customers'
        axios.get(URL)
          .then(response => {
            this.customers = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
        console.log('call api with', axios)
      },
      deleteCustomer: function (id, index) {
        const URL = '/api/customers/' + id
        this.customers.splice(index, 1)
        axios.delete(URL)
          .then(function (response) {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
        console.log('call api with', axios)
      },
      insertCustomer: function () {
        const URL = '/api/customers'
        var address = { id: '', city: '', country: '', province: '', street: '' }
        axios.post(URL, {
          name: this.name,
          address: address
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        this.callApi()
      },
      updateCustomer: function (customer) {
        const URL = '/api/customers/' + customer.id
        var address = { id: '', city: '', country: '', province: '', street: '' }
        axios.put(URL, {
          name: 'tes',
          address: address
        })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        this.callApi()
      },
      mounted: function () {
        this.callApi()
      }
    }
  }
</script>

<style scoped>

</style>
