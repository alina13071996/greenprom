<template>
  <div class="pt-16" style="background-image: url('/salts/water.png'); width:100%; height:100%">
    <div v-if="salt!=undefined" class="d-flex flex-column">
        <div :class="`d-flex mx-auto ${isMobile ? 'block_salt_main_mobile flex-column': 'block_salt_main flex-row'}`">
            <div :class="`${isMobile ? 'mx-auto': ''}`" ><v-img max-height="210px" max-width="210px" class="mx-auto mt-8 ml-2"
             :src="salt.img"></v-img></div>
            <div class="mx-auto mr-2">
            <div class="Roboto_Medium mt-8 mb-5" style="font-size:20px;line-height:18px">{{salt.name}}</div>
            <div class="mb-2" style="font-size:16px;line-height:18px"><b>Состав: </b>{{salt.sostav}}</div>
            <div class="mb-2" style="font-size:16px;line-height:18px"><b>{{salt.slovo}}</b>{{salt.text}}</div>
            <div class="d-flex flex-row justify-end mr-2">
                <div class="d-flex ml-5">
                    <div class="Roboto_Regular"><b>Вес: </b>1 кг</div>
                </div>
                <!--<div class="d-flex ml-5">
                    <div class="Roboto_Regular"><b>Цена: </b>0.98 BYN (32 RUB)</div>
                </div>-->
            </div>
          </div>
        </div>
        <button class="btn_in_block mt-10 mb-10 mx-auto" style="font-size:13px" @click="$router.back()"><v-icon class="mr-2">mdi-close</v-icon>Закрыть</button>
    </div>
    <div v-else class="d-flex flex-column">
     Ошибка!    
    </div>
  </div>
</template>


<script>
export default {
  methods:{
  },
  data(){
    return{
      salt: this.$store.getters.getSalts[this.$route.params.id],
    }
  },
   computed:{
    isMobile:{
      get(){
        return this.$store.getters.isMobile;
      }
    },
  },
}
</script>