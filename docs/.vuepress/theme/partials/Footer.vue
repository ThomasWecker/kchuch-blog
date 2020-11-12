<template>
<ClientOnly>
  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">Build with <vp-icon color="#FF0000" name="heart" /> by Tom & Lil</section>
      <nav class="site-footer-nav">
        <a v-for="(item, index) in footer"
          :key="index"
          :href="item.external ? item.link : $withBase(item.link)"
          :target="item.external ? '_blank' : '_top'"
          rel="noopener"
        >{{ item.text }}</a>
      </nav>
    </div>
  </footer>
<ClientOnly>  
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    components: { },
    computed: {
      ...mapGetters(['blog', 'footer']),
      year () {
        return new Date().getFullYear()
      }
    }
  }
</script>
