<template>
  <div id="app">
    <Toolbar />
    <Content>
      <SideMenu />
      <Container>
        <router-view></router-view>
      </Container>
    </Content>
  </div>
</template>

<script>
import Toolbar from "Components/layout/Toolbar.vue";
import SideMenu from "Components/layout/SideMenu.vue";
import Content from "Components/layout/Content.vue";
import Container from "Components/layout/Container.vue";
export default {
  components: {
    Toolbar,
    SideMenu,
    Content,
    Container
  }
};
</script>

