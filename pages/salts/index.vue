<template>
    <div style="background-image: url('/salts/water.png'); height:100%; width:100%; background-size:cover;">
        <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Морские соли с микроэлементами</div>
        <div class="grid mt-10 pb-10 justify-center">
            <div v-for="(salt, i) in salts" :value="i" :key="i" class="d-flex justify-center">
                <div class="block_salt">
                    <v-img max-height="40%" max-width="40%" class="mx-auto mt-5" :src="salt.img" ></v-img>
                    <div class="Roboto_Medium mt-5 mr-1 ml-2" style="font-size:15px; line-height:15px;margin-bottom:1.2vw">{{salt.name}}</div>
                    <!--<div class="d-flex" style="margin-bottom:1vw">
                        <div class="ml-2" style="width:70px; font-size:15px">
                            <div class="Roboto_Regular"><b>Вес: </b>1кг</div>
                        </div>-->
                        <!--<div style="width:200px; font-size:15px">
                            <div class="Roboto_Regular"><b>Цена: </b>0.98 BYN (32 RUB)</div>
                        </div>-->
                    <!--</div>-->
                    <div class="pb-5"><button class="btn_in_block Roboto_Medium" style="font-size:13px;" @click="click(i)">Подробнее</button></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'LayoutPage',
  created(){
  },
  methods:{
      click(id){
          this.$router.push(`/salts/${id}`);
      }
  },
  computed:{
    isMobile:{
      get(){
        return this.$store.getters.isMobile;
      }
    },
    salts: {
      get(){
        return this.$store.getters.getSalts;
      }
    },
  }
}
</script>