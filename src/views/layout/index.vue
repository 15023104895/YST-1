<template>
  <div class="site-wrapper"
       :class="siteWarpperClasses"
       v-loading.fullscreen.lock="loading"
       element-loading-text="拼命加载中">
    <template v-if="!loading">
      <topbar></topbar>
      <sidebar></sidebar>
      <div class="site-content__wrapper" :style="siteContentWarpperStyles">
        <content-tabs></content-tabs>
        <iframe v-if="$store.state.contentAcitveTab.type=='iframe'" :src="$store.state.contentAcitveTab.iframurl" width="100%" height="100%" frameborder="0" scrolling="yes">
        </iframe>
        <router-view v-else></router-view>
        <!--路由不刷新-->
        <!--<keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>-->
        <!--路由不刷新-->
      </div>
    </template>
  </div>
</template>
<script type="text/ecmascript-6">
  import API  from '@/api'
  import Topbar from './topbar'
  import Sidebar from './sidebar'
  import ContentTabs from './content-tabs'
  import { mapMutations,mapGetters } from 'vuex'
  import { getStore} from '@/utils'
  export default {
    components: {
      Topbar,
      Sidebar,
      ContentTabs
    },
    data(){
      return{
        loading:false
      }
    },
    mounted(){
      this.resetDocumentClientHeight()
      window.onresize = () => {
        this.resetDocumentClientHeight()
      };
      var userInfo= JSON.parse( getStore('userInfo'));
      var users=userInfo.account;
      this.UPDATE_USER_NAME({'name':users.username});
      this.UPDATE_USER_ID({'id':users.id});
    },
    computed: {
      siteWarpperClasses () {
        return [
          { 'site-sidebar--collapse': this.$store.state.sidebarCollapse }
        ]
      },
      siteContentWarpperStyles () {
        if(this.$store.state.contentAcitveTab.type=='iframe'){
          return [{ 'height': this.$store.state.documentClientHeight + 'px' }]
        }else{
          return [{ 'minHeight': this.$store.state.documentClientHeight + 'px' }]
        }
      }
    },
    methods:{
      // 重置窗口可视高度
      resetDocumentClientHeight () {
        this.UPDATE_DOCUMENT_CLIENT_HEIGHT({ height: document.documentElement['clientHeight']-10 })
        var iframeHight=document.documentElement['clientHeight']-240;
        this.$store.dispatch('setUPDATE_DOCUMENT_CLIENT_IFRAME',iframeHight);
        this.UPDATE_DOCUMENT_CLIENT_IFRAME({ height: (document.documentElement['clientHeight']-240)})
      },
      ...mapMutations(['UPDATE_DOCUMENT_CLIENT_HEIGHT','UPDATE_DOCUMENT_CLIENT_IFRAME','UPDATE_USER_NAME','UPDATE_USER_ID'])
    },
  }
</script>
