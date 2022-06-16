<template>
  <div class="slide fill-height">
    <!--Левая часть-->
    <div class="d-flex fill-height">
      <div class="d-flex flex-column justify-center" :style="`${isMobile ? 'width:100%': 'width:50%'}`">
        <div class="Roboto_Medium text-center" style="color:rgba(0, 120, 15, 1); font-size:50px">
          ООО "ГринПром"</div>
        <div class="Roboto_Medium mt-5 text-center">Производство бальнеологической<br>
             и парфюмерно-космической продукции</div>
             <!--Диалог Заказать звонок-->
             <div class="d-flex justify-center" color="transparent">
            <v-dialog v-model="dialog" width="400px" persistent content-class='asd'>
                <template v-slot:activator="{ on, attrs }">
                    <button v-bind="attrs" v-on="on" :class="`Roboto_Regular ${isMobile ? 'color_btn1_mobile':'color_btn1'}`" 
                    style="margin-top:35px;">
                    Заказать звонок</button>
                </template>
                <div class="align-center" width="300px" elevation="0" style="background: #C1D9C4; border-radius: 0px 40px;">
                    <div class="d-flex justify-end"><button class="pr-5 pt-2" @click="dialog = false"><v-icon>mdi-close</v-icon>
                    </button></div>
                    <v-row justify="center" class="d-flex mx-auto pb-0">
                        <v-card-title class="Roboto_Medium" style="font-size:25px; color:black; padding:0px">
                    Обратный звонок</v-card-title></v-row>
                    <v-card-text class="Roboto_Regular d-flex justify-center" style="font-size:11px;">
                        Перезвоним в течения дня.</v-card-text>
                    <v-col cols="8" justify="center" class="mx-auto" style="height:200px;">
                    <v-form ref='form'>
                        <v-text-field :rules="nameRules" label="Имя" v-model="name" required color="green" outlined 
                        style="border-radius:0px 20px;"/>
                        <v-text-field type="number" color="green" maxlength="9" v-model="tel" :rules="numberRules" prefix="+375 " 
                        required outlined style="border-radius:0px 20px;"/>
                    </v-form>
                    </v-col>
                    <div class="d-flex justify-center pb-5"><button @click="sendMessage" :class="`${isMobile ? 'color_btn1_mobile':'color_btn1'}`">
                        Заказать звонок</button></div>
                </div>
                </v-dialog>
            </div>
      </div>
      <!--Правая часть-->
      <div v-if='!isMobile' style="width:50%; background: #84B489;">
        <v-carousel :show-arrows="false" height="100%" hide-delimiter-background cycle>
            <v-carousel-item v-for="(slide, i) in slides" :value="i" :key="i">
                <div class="d-flex full-width" :style="`height: ${height-48-50}px`">
                  <div class="my-auto full-width">
                    <v-img :src="slide.src1" class="full-width" />
                    <div style="font-size:1.5vw; color: white;" 
                    class="Roboto_Regular text-center mt-1">{{slide.name}}
                    </div>
                  </div>
                </div>
            </v-carousel-item>
        </v-carousel>
      </div>
      </div>
  </div>
</template>

<style>
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.my-text-style{
    color: red
  }

.asd{
  border-radius: 0px;
  box-shadow: none;
}
.slide .absolute{
  position: absolute;
  right: 0px;
  width: 56%;
  height: 90%;
  background: transparent;
}
.carousel{
  height: 80px;
}

</style>

<script>
export default {
  name: 'IndexPage',
  methods:{
    modal(){
      console.log(this.$refs.modal)
    },
    sendMessage(){
      if(this.$refs.form.validate()){
        this.$axios.post('/mail.php',{
          key: 0,
          name:this.name,
          tel : `+375 ${this.tel}`
        })
        this.dialog=false;
      }
    }
  },
  computed:{
    isMobile:{
      get(){
        return this.$store.getters.isMobile;
      }
    },
    height:{
      get(){
        return this.$store.getters.height;
      }
    }
  },
  data() {
    return{
      dialog: false,
      item: 'salts',
      valid: true,
      name:'',
      tel: '',
      nameRules: [
        v => !!v || 'Укажите имя',
        v => (v && v.length <= 10) || 'Имя должно быть не больше 10 символов',
      ],
      numberRules: [
        v => !!v || 'Укажите номер вашего телефона',
        v => (v && v.length <= 9) || 'Номер телефона должно быть не больше 9 символов',
      ],
      slides:{
        salts: {
          src1: 'saltwater.png',
          name: 'Морские соли с микроэлементами',
          style:'',
          },
        brikets: {
          src1: 'briketswater.png',
          name: 'Брикеты солевые с сильвинитом',
          style:'height: 100%;',
          },
        lamps:{
          src1:'lam.png',
          name: 'Лампы солевые',
          style:'height: 450px;',
          },
        speleo:{
          src1: 'Speleo.png',
          name: 'Спелеокомната под ключ',
          style:'height: 450px;',
          },
        briket:{
          src1: 'briket.png',
          name: 'Брикеты для пола в спелеокомнатах',
          style:'height: 450px;',
          },
      },
    }
  }
}
</script>
