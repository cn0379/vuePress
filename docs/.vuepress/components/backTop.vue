​
<template>
  <div id="go-top">
    <div class="go-top" v-show="goTopShow" @click="goTop">
      <i class="go-top-icon"></i>
      回到顶部
    </div>
  </div>
</template>
<script>
export default {
  name: 'goTop',
  data() {
    return {
      scrollTop: '',
      goTopShow: false
    }
  },
  watch: {
    scrollTop(val) {
      if (this.scrollTop > 500) {
        this.goTopShow = true
      } else {
        this.goTopShow = false
      }
    }
  },
  methods: {
    handleScroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (this.scrollTop > 500) {
        this.goTopShow = true
      }
    },
    goTop() {
      let timer = null,
        _that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn() {
        if (_that.scrollTop > 0) {
          _that.scrollTop -= 250
          document.body.scrollTop = document.documentElement.scrollTop =
            _that.scrollTop
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer)
          _that.goTopShow = false
        }
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.go-top {
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #3eaf7c;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px 2px rgba(31,51,73,.25);
  color: #fff;
  font-size: 14px;
  text-align: center;
}

</style>

​