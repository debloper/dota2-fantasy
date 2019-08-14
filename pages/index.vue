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
        autofocus
        autocomplete
        icon='label'
        type='is-dark'
        size='is-large'
        placeholder='Type team names to shortlist...'
        @input='setAvailableTeams'
        @typing='getFilteredTeams'>
      </b-taginput>
    </b-field>

    <b-field>
      <b-radio-button
        v-for='(role, index) in roles'
        :key='index'
        v-model='selectedRole'
        :native-value='role'
        type='is-dark'
        size='is-large'>
        <b-icon :icon='icons[role]'></b-icon>
        <span>{{ role }}</span>
      </b-radio-button>
    </b-field>

    <div class="content">
      <div class="card has-background-light is-inline-block" v-for='(value, key) in shortlistedPlayers' :key='key'>
        <div class="card-image">
          <figure class="image">
            <img v-bind:src="'players/' + value.icon" v-bind:alt="value.name">
          </figure>
        </div>
        <div class="title is-5">
          {{ value.name }}
        </div>
        <div class="subtitle is-7">
          {{ value.team }}
        </div>
        <div class="list">
          <div class="list-item" v-for="(bonus, index) in value.bonus" :key="index">
            {{ bonus }}
          </div>
        </div>
      </div>
    </div>

    <footer class="content is-small">
      Dota 2 is registered trademark of Valve Corporation.<br />
      Dota 2 logo, The International logo & player images credit Valve Corporation.
    </footer>

  </section>
</no-ssr>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import payload from '~/assets/data.json'
import bonuses from '~/assets/stat.json'

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      teams: payload.teams,
      selectedTeams: [],
      availableTeams: this.teams,
      roles: ['all'].concat(payload.roles),
      selectedRole: '',
      rosters: payload.rosters,
      icons: {
        all: 'asterisk',
        mid: 'arrow-collapse',
        core: 'sword',
        support: 'lifebuoy'
      }
    }
  },
  computed: {
    shortlistedPlayers: function () {
      let players = []

      for (let team of this.selectedTeams) {
        for (let player of this.rosters[team]) {
          let role = this.selectedRole.toString()
          player.team = team
          player.bonus = bonuses[player.name]
          if (role === 'all' || role === player.role || !role) {
            players.push(player)
          }
        }
      }

      return players
    }
  },
  methods: {
    setAvailableTeams: function (selected) {
      this.availableTeams = this.teams
      for (let team of selected) {
        let teamIndex = this.availableTeams.indexOf(team)
        if (teamIndex >= 0) {
          this.availableTeams.splice(teamIndex, 1)
        }
      }
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

.content {
  margin-top: 2rem;
}
.card.is-inline-block {
  width: 10rem;
  margin: 1rem;
  border-radius: 0.25rem;
}
.card .title {
  color: #444;
  margin: 0.25rem auto 1rem;
}
.card .subtitle.is-7 {
  padding-top: 0.25rem;
  margin-bottom: 0.75rem;
}
.card .list-item {
  font-size: 0.75rem;
}
.content figure {
  margin: 1rem 0 0;
}
</style>
