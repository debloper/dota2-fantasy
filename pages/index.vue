<template>
  <section class="container">
    <div class="brand">
      <app-logo/>
      <h1 class="title">
        Fantasy Roster Manager
      </h1>
    </div>
    <div class="field">
      <div class="control">
        <multiselect
          class="input is-large is-rounded"
          placeholder="Shortlisted teams..."
          v-model="value"
          :options="options"
          :multiple="true"
          >
        </multiselect>
      </div>
    </div>
    <div class="tabs is-centered is-large">
      <a class="is-active">all</a>
      <a>core</a>
      <a>offlane</a>
      <a>support</a>
    </div>
    <ul>
      <li>Player 1</li>
      <li>Player 2</li>
      <li>Player 3</li>
      <li>Player 4</li>
      <li>Player 5</li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    AppLogo,
    Multiselect
  },
  data () {
    return {
      value: null,
      options: ['Team 1', 'Team 2', 'Team 3']
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  margin: 1rem auto 2rem;
  color: #a0a0a0;
}
</style>

