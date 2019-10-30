<template>
  <div class="wrapper">
    <div class="title-section">
      <Card class="logo-card">
        <img :src="logoMicrosoft">
      </Card>
      <div class="title-subtitle-section">
        <span class="title">Microsoft</span>
        <div>
          <img :src="iconLocation">
          <span class="subtitle">Redmond, WA USA</span>
        </div>
      </div>
    </div>
    <div class="description">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet posuere tellus. Nulla ultrices ut magna in porta. Maecenas consectetur purus id lorem pretium, in porttitor tortor pellentesque. Duis ac velit sem.
      </span>
    </div>
    <div class="cards-section">
      <Card
        class="left-card"
        title="ACTIVITIES"
      >
        <div
          v-for="activity in activities"
          :key="activity.id"
        >
          <div class="item-activity">
            <span class="last-activity">{{activity.lastActivity}}</span>
            <Icon
              class="icon-activity"
              :name="activity.icon"
            />
            <span class="description-activity">{{activity.description}}</span>
          </div>
          <Divider />
        </div>
      </Card>
      <div class="right-cards">
        <Card title="SIMILAR COMPANIES">
        </Card>
        <Card title="COMPANY SPEND HISTORY">
        </Card>
        <Card title="COMPANY SPEND HISTORY">
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    logoMicrosoft() {
      return require("Images/microsoft.png");
    },
    iconLocation() {
      return require("Images/location.png");
    },
    ...mapState(["activities"])
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 2px;
}

.subtitle {
  color: gray;
}

.title-section {
  display: flex;
  justify-content: flex-start;
}

.logo-card {
  padding: 20px;
}

.title-subtitle-section {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.description {
  margin-top: 20px;
}

.cards-section {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.left-card {
  width: 49%;
}

.right-cards {
  width: 49%;
}

.right-cards > *:not(:first-child) {
  margin-top: 10px;
}

.item-activity {
  padding: 20px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.last-activity {
  flex: 1;
  color: grey;
}

.description-activity {
  margin-left: 10px;
  flex: 4;
}
</style>