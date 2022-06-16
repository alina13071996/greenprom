<template>
  <v-app>
    <!--Меню для тел и планш-->
    <div v-if="isMobile">
      <div style="position:absolute; height:100%; width:100%">
      <v-app-bar color="white">
        <v-img height="50px" max-width="80px" src="/logotip.png"/><v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" right class="overflow-hidden" absolute temporary width="60%" 
      style="transform: unset;">
          <v-item-group v-model="group" style="margin-top:150px;">
            <v-list-item v-for="(button, i) in buttons" :value="i" :key="i" :to="button.to" 
            class="d-flex justify-center Roboto_Medium" color="green">
              {{button.name}}</v-list-item>
          </v-item-group>
      </v-navigation-drawer>
      </div>
    </div>
    <!--Меню для тел и планш/-->
    <!--Меню для ноутбука и пк-->
    <div v-else class="d-flex" ref="header">
      <v-toolbar color="white" dense elevation="0">
        <v-img class="mt-10" height="5vw" max-width="8vw" src="/logotip.png"></v-img>
        <v-tabs centered class="Roboto_Medium" color="rgba(0, 120, 15, 1)">
          <v-tab v-for="(button, i) in buttons" :value="i" :key="i" :to="button.to">{{button.name}}</v-tab>
        </v-tabs>
        <div class="Roboto_Medium mr-5" style="color:rgba(0, 120, 15, 1)">Greenprom@mail.ru</div>
      </v-toolbar>
    </div>
    <!--Меню для ноутбука и пк/-->
        <Nuxt />
        <div v-if="$route.name!='index'" class="d-flex flex-column">
        <div
        :class="`d-flex Roboto_Regular text-center ${isMobile ? 'flex-column ': ''}`">
            <v-card-text class="my-auto d-flex justify-center">
                <v-img max-width="80px" max-height="50px" src="/logotip.png"/>
            </v-card-text>
            <v-card-text class="my-auto" to='/'>
                <v-list-item class="d-flex justify-center" to='/'><b>На главную</b></v-list-item>
            </v-card-text>
            <v-card-text>
                <div class="mx-auto"><b>Мы в соцсетях</b></div>
                <div class=" d-flex mt-2" style="height:20px;">
                    <div class="d-flex mx-auto">
                        <img class="mr-3" src="/about/viber.png"/>
                        <img class="mr-3" src="/about/telegramm.png"/>
                        <img src="/about/watchapp.png"/>
                    </div>
                </div>
            </v-card-text>
            <v-card-text>
                <div class="mb-2"><b>Контакты</b></div>
                <div>+375 29 69 45 943 - директор</div>
                <div>+375 29 61 78 039 - менеджер</div>
            </v-card-text>
            <v-card-text class="my-auto">
                <span class="notranslate" style="color:rgba(0, 120, 15, 1)"><b>greenprom@mail.ru</b></span>
            </v-card-text>
        </div>
        <div class="mx-auto Roboto_Medium">© ГринПром 2022</div>
        </div>
  </v-app>
</template>


<script>
export default {
  created(){
  },
  data(){
    return{
      drawer:false,
      group:null,
      buttons:{
        main:{
          name: 'Главная',
          to:'/',
        },
        salts:{
          name:'Соли',
          to:'/salts',
        },
        brikets:{
          name:'Брикеты',
          to:'/brikets',
        },
        lamps:{
          name:'Лампы солевые',
          to:'/lamps',
        },
        speleo:{
          name:'Спелеокомнаты',
          to:'/speleoroom',
        },
        about:{
          name:'О компании',
          to:'/about',
        },
        kontacts:{
          name:'Контакты',
          to:'/kontacts',
        }
      }
    }
  },
  computed:{
    isMobile:{
      get(){
        return this.$store.getters.isMobile;
      }
    },
  },
  watch:{
    group(){
      this.drawer=false
    },
  },
}
</script>