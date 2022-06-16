<template>
  <div style="background-image: url('/brikets/waterBr.png'); width:100%; height:100%; background-size: cover;">
    <div class="mt-16">
      <div v-if="briket!=undefined" class="d-flex flex-column">
          <div :class="`d-flex mx-auto ${isMobile ? 'block_salt_main_mobile flex-column': 'block_salt_main flex-row'}`">
              <div :class="`${isMobile ? 'mx-auto': ''}`" ><v-img max-height="200px" max-width="110px" 
              class="mx-auto mt-8 ml-5 mr-5" :src="briket.img"></v-img></div>
              <div class="mx-auto mr-2">
              <div class="Roboto_Medium mt-8 mb-5" style="font-size:20px;line-height:18px">{{briket.name}}</div>
              <div class="mb-2" style="font-size:16px;line-height:18px"><b>Состав: </b>{{briket.sostav}}</div>
              <div class="mb-2" v-if="'prim' in briket" style="font-size:16px;line-height:18px">
                <b>{{briket.prim}} </b>
                {{briket.prim1}}
              </div>
              <div class="mb-2" style="font-size:16px;line-height:18px;"><b>Назначение: </b>
              предназначен для бань, саун в домашних и SPA комплексах</div>
              <div class="mb-2" style="font-size:16px;line-height:18px"><b>Размеры: </b>200*100*50 мм</div>
              <div class="d-flex justify-end mr-5 mb-2"><div><b>Срок хранения: </b>12 месяцев</div></div>
              <div class="d-flex flex-row justify-end mr-5">
                  <div class="d-flex ml-3">
                      <div class="Roboto_Regular"><b>Вес: </b>2 кг</div>
                  </div>
                  <!--<div class="d-flex ml-2">
                      <div class="Roboto_Regular"><b>Цена: </b>{{briket.price}}</div>
                  </div>-->
              </div>
            </div>
          </div>
          <button class="btn_in_block mt-10 mx-auto mb-10" style="font-size:13px" @click="$router.back()"><v-icon class="mr-2">mdi-close</v-icon>Закрыть</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods:{
  },
  data(){
    return{
      briket: this.$store.getters.getBrikets[this.$route.params.id],
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