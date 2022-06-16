<template>
    <div style="background-image: url('/lamps/waterLamps.png'); height:100%; width:100%; background-size:cover;">
        <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Лампы солевые для интерьера</div>
        <div class="grid mt-10 pb-10 justify-center">
            <div v-for="(lamp, i) in lamps" :value="i" :key="i" class="d-flex justify-center">
                <div class="block_salt mx-auto">
                    <v-hover v-slot="{ hover }">
                        <v-img height="180px" max-width="60%" class="mx-auto mt-5" :src="hover ? lamp.img2: lamp.img1"></v-img>
                    </v-hover>
                    <div class="Roboto_Medium mt-5 mr-1 ml-2" style="font-size:15px; line-height:15px;margin-bottom:2vw">{{lamp.name}}</div>
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
  data(){
    return{
      lamps: this.$store.getters.getLamps,
    }
  },
  methods:{
      click(id){
          this.$router.push(`lamps/${id}`);
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