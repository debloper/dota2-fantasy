<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Fantasy Roster Manager
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  padding: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.title {
  display: block;
  font-weight: normal;
  color: #ACB4B9;
}
</style>

