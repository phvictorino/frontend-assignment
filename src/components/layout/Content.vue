<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.content {
  width: 100vw;
  position: absolute;
  top: 100px;
  left: 100px;
  display: flex;
}
</style>