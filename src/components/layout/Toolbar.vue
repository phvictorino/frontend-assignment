<template>
  <div class="toolbar-top">
    <div class="content-toolbar">
      <span class="company-logo">
        Logo
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.toolbar-top {
  background-color: #394883;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
}

.content-toolbar {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
}

.company-logo {
  color: #fff;
}
</style>