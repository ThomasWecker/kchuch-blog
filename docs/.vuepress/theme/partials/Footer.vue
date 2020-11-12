<template>
  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">Build with by Tom & Lil</section>
     <ClientOnly> 
      <nav class="site-footer-nav">
        <a v-for="(item, index) in footer"
          :key="index"
          :href="item.external ? item.link : $withBase(item.link)"
          :target="item.external ? '_blank' : '_top'"
          rel="noopener"
        >{{ item.text }}</a>
      </nav>
    <ClientOnly>  
    </div>
  </footer>

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
