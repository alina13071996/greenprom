<template>
    <div>
        <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Брикеты солевые и сильвинитовые</div>
        <div class="grid mt-10 pb-10 justify-center" style="background-image: url('/brikets/waterBr.png'); background-size: cover;">
            <div v-for="(briket, i) in brikets" :value="i" :key="i" class="d-flex justify-center">
                <div class="block_salt">
                    <v-img max-height="60%" max-width="40%" class="mx-auto mt-5" :src="briket.img"></v-img>
                    <div class="Roboto_Medium mt-5 mr-1 ml-2" style="font-size:15px; line-height:15px;margin-bottom:1.2vw">{{briket.name}}</div>
                    <!--<div class="d-flex" style="margin-bottom:2vw">-->
                      <!--<div class="d-flex justify-center mb-2">
                        <div class="ml-2" style="width:70px; font-size:15px;">
                            <div class="Roboto_Regular"><b>Вес: </b>2 кг</div>
                        </div>
                      </div>-->
                        <!--<div style="width:200px; font-size:15px">
                            <div class="Roboto_Regular"><b>Цена: </b>{{briket.price}}</div>
                        </div>-->
                    <!--</div>-->
                    <button class="btn_in_block Roboto_Medium mb-5" style="font-size:13px;" @click="click(i)">Подробнее</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data(){
    return{
      brikets: this.$store.getters.getBrikets,
    }
  },
  methods:{
      click(id){
          this.$router.push(`/brikets/${id}`);
      }
  },
  computed:{
    isMobile:{
      get(){
        return this.$store.getters.isMobile;
      }
    },
  }
}
</script>