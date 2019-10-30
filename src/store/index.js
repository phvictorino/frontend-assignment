import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [
      {
        id: 1,
        lastActivity: "8 days ago",
        icon: "play",
        description: "Cloud Ochestration replaced Microsoft on 1 property"
      },
      {
        id: 2,
        lastActivity: "10 days ago",
        icon: "world",
        description: "Express Scripts replaced Microsoft on 1 property"
      },
      {
        id: 3,
        lastActivity: "12 days ago",
        icon: "defense",
        description: "Cloud Ochestration replaced Microsoft on 1 property"
      },
      {
        id: 4,
        lastActivity: "14 days ago",
        icon: "routes",
        description: "Cloud Ochestration replaced Microsoft on 1 property"
      },
      {
        id: 5,
        lastActivity: "15 days ago",
        icon: "dns",
        description: "Cloud Ochestration replaced Microsoft on 1 property"
      },
      {
        id: 6 ,
        lastActivity: "16 days ago",
        icon: "chart",
        description: "Cloud Ochestration replaced Microsoft on 1 property"
      },
    ]
  }
})