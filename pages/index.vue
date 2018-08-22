<template>
  <section class="container">
    <div class="brand">
      <app-logo/>
      <h1 class="title">
        Fantasy Roster Manager
      </h1>
    </div>
    <b-field>
      <b-taginput
        v-model="selectedTeams"
        :data="teams"
        autocomplete
        icon="label"
        type="is-dark"
        placeholder="Shortlisted teams..."
        @typing="getFilteredTeams">
      </b-taginput>
    </b-field>

    <b-field>
      <b-radio-button
        v-for='(role, index) in roles'
        :key='index'
        v-model='selectedRoles'
        :native-value='role'
        type="is-dark">
        <b-icon :icon="icons[role]"></b-icon>
        <span>{{ role }}</span>
      </b-radio-button>
    </b-field>

    <ul>
      <li v-for='(team, index) in allTeams' :key='index'>{{ team }}</li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

const data = require('@/static/data.json')

console.log(Object.keys(data))

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      teams: this.allTeams,
      selectedTeams: [],
      roles: ['all', 'core', 'offlane', 'support'],
      selectedRoles: [],
      icons: {
        all: 'asterisk',
        core: 'sword',
        offlane: 'shield-half-full',
        support: 'lifebuoy'
      }
    }
  },
  computed: {
    allTeams: function () {
      return Object.keys(data)
    }
  },
  methods: {
    getFilteredTeams(text) {
      this.teams = this.allTeams.filter((option) => {
          return option.toString().toLowerCase().indexOf(text.toLowerCase()) >= 0
      })
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
.field {
  min-width: 20rem;
  max-width: 50rem;
}
</style>

