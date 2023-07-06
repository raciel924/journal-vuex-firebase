<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> hola mundo </h1>
    <button type="button" class="btn btn-primary" >primary</button>
    <button type="button" class="btn btn-secondary" >secondary</button>
    <button @click="goTo" class="btn btn-success" >success</button>

  </div>
</template>
<script>
export default {
  methods: {
    goTo() {
      this.$router.push({name: 'no-entry'})
    }
  }
}

</script>




