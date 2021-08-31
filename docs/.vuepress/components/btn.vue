<template>
  <div class="btn">
    <slot>click me!</slot>
  </div>
</template>

<script>
export default {}
</script>

<style scoped >
.btn {
  width: 70px;
  height: 30px;
  margin-top: 20px;
  background: #3eaf7c;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  transition: all ease 0.3s;
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
}
.btn:hover {
  opacity: 0.8;
  transition: all ease 0.3s;
}
</style>