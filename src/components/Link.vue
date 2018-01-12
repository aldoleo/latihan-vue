<template>
  <div>
    <ul>
      <router-link v-bind:to="item.url" v-for="item in menus">{{ item.label }} <br></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'loop-test',
    data () {
      return {
        list: [1, 2],
        menus: {
          home: {
            url: '/',
            label: 'Home'
          },
          list: {
            url: '/customers',
            label: 'List Customer'
          },
          register: {
            url: '/register',
            label: 'Register'
          }
        }
      }
    }
  }
</script>

<style>

</style>
