<template>
<no-ssr>
  <section class='container'>

    <div class='brand'>
      <app-logo/>
      <h1 class='title'>
        Fantasy Roster Manager
      </h1>
    </div>

    <b-field>
      <b-taginput
        v-model='selectedTeams'
        :data='availableTeams'
        autocomplete
        icon='label'
        type='is-dark'
        size='is-large'
        placeholder='Shortlisted teams...'
        @input='setAvailableTeams'
        @typing='getFilteredTeams'>
      </b-taginput>
    </b-field>

    <b-field>
      <b-radio-button
        v-for='(role, index) in roles'
        :key='index'
        v-model='selectedRoles'
        :native-value='role'
        type='is-dark'
        size='is-large'>
        <b-icon :icon='icons[role]'></b-icon>
        <span>{{ role }}</span>
      </b-radio-button>
    </b-field>

    <ul>
      <li v-for='(team, index) in teams' :key='index'>{{ team }}</li>
    </ul>

  </section>
</no-ssr>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import data from '~/static/data.json'

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      selectedTeams: [],
      availableTeams: function () { return this.teams },
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
      teams: function () { return Object.keys(data) }
  },
  methods: {
    setAvailableTeams: function (selected) {
      this.availableTeams = this.teams
      for (let team of selected) {
        if (this.availableTeams.indexOf(team) >= 0) {
          this.availableTeams.splice(this.availableTeams.indexOf(team), 1)
        }
      }
      console.log(this.availableTeams)
    },
    getFilteredTeams: function (text) {
      this.availableTeams = this.teams.filter((team) => {
          return team.toString().toLowerCase().indexOf(text.toLowerCase()) >= 0
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
  padding: 2rem;
}
.title {
  margin: 1rem auto 2rem;
  color: #a0a0a0;
}

/* expand <field> contents */
.field { width: 100%; }
.control { flex-basis: 100%; }
label.b-radio { width: 100%; }
</style>

