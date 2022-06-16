<template>
    <div>
        <div style="background-image: url('/speleo/spel.png'); background-size: cover;">
            <div :class="`Roboto_Regular mt-2 pt-10 ${isMobile ? 'mt-10': ''}`" 
            style="color:#C9CB67; font-size:4vw; text-align:center; line-height: 4vw;">
                Строительство спелеокомнат под ключ</div>
            <div class="Roboto_Medium mt-2" 
            :style="`color: white;text-align:center; ${isMobile ? 'font-size:12px; line-height:14px': 'font-size:1.5vw; line-height:1.8vw'} `">
                Построим вашу идеальную спелеоклиматическую камеру под ключ, качественно и в срок!</div>
            <div :class="`d-flex text-center mx-auto ${isMobile ? 'flex-column':'flex-row'} `" 
            :style="`color:white; ${isMobile ? 'width:250px;margin-top:40px;':'width:90vw;margin-top:120px;'}`">
                <div class="d-flex flex-column" :style="` ${isMobile ? 'width:100%;' : 'width:35vw;'}`">
                    <v-img class="mx-auto mb-5" width="65px" max-height="55px" src="/speleo/img1.png" />
                    <div :style="`${isMobile ? 'font-size:15px' : 'font-size:25px'}`">Разработка индивидуального дизайн-проекта</div>
                </div>
                <div :class="`d-flex flex-column ${isMobile ? 'mt-5 mb-5' : 'mr-12 ml-12'}`" :style="` ${isMobile ? 'width:100%;' : 'width:40vw;'}`">
                    <v-img class="mx-auto mb-5" width="55px" max-height="55px" src="/speleo/img2.png" />
                    <div :style="`${isMobile ? 'font-size:15px' : 'font-size:25px'}`">Создаем вентиляцию и микроклимат подземных солевых пещер</div>
                </div>
                <div class="d-flex flex-column" :style="` ${isMobile ? 'width:100%;' : 'width:35vw;'}`">
                    <v-img class="mx-auto mb-5" width="55px" max-height="55px" src="/speleo/img3.png" />
                    <div :style="`${isMobile ? 'font-size:15px' : 'font-size:25px'}`">Делаем  дополнительные элементы по требованию заказчика</div>
                </div>
            </div>
            <!--Диалог Узнать цену-->
            <div class="d-flex justify-center" color="transparent">
            <v-dialog v-model="dialog" width="400px" persistent content-class='asd'>
                <template v-slot:activator="{ on, attrs }">
                    <button v-bind="attrs" v-on="on" :class="`Roboto_Regular ${isMobile ? 'color_btn1_mobile':'color_btn1'}`" 
                    style="margin-top:180px; margin-bottom:100px;">
                    Узнать цену</button>
                </template>
                <div class="align-center" width="300px" elevation="0" style="background: #C1D9C4; border-radius: 0px 40px;">
                    <div class="d-flex justify-end"><button class="pr-5 pt-2" @click="dialog = false"><v-icon>mdi-close</v-icon>
                    </button></div>
                    <v-row justify="center" class="d-flex mx-auto pb-0">
                        <v-card-title class="Roboto_Medium" style="font-size:25px; color:black; padding:0px">
                    Рассчитать смету</v-card-title></v-row>
                    <v-card-text class="Roboto_Regular d-flex justify-center" style="font-size:11px;">
                        Сделаем в течение дня расчет под ваш объем помещения.</v-card-text>
                    <v-col cols="8" justify="center" class="mx-auto" style="height:350px; margin-top:-20px">
                    <v-form ref='form'>
                        <v-text-field :rules="nameRules" label="Имя" v-model="name" required color="green" outlined 
                        style="border-radius:0px 20px;"/>
                        <v-text-field :rules="emailRules" label="E-mail" v-model="email" 
                        required color="green" outlined style="border-radius:0px 20px;"/>
                        <v-text-field type="number" color="green" maxlength="9" :rules="numberRules" prefix="+375 " required outlined
                        style="border-radius:0px 20px;" v-model="tel"/>
                        <v-text-field label="Сообщение" v-model="sms" required color="green" outlined style="border-radius:0px 20px;"/>
                    </v-form>
                    </v-col>
                    <div class="d-flex justify-center pb-5"><button @click="sendMessage" :class="`${isMobile ? 'color_btn1_mobile':'color_btn1'}`">
                        Отправить заявку</button></div>
                </div>
                </v-dialog>
            </div>
        </div>
        <div style="background-image: url('/speleo/waterSpeleo2.png'); background-size:cover;">
            <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">О CПЕЛЕОЛЕЧЕНИИ</div>
            <div class="mx-auto pb-16 Roboto_Regular" style="width:80vw; text-align:center;font-size:20px">
                <b>Спелеотерапия</b> – это эффективный немедикаментозный метод лечения в условиях микроклимата подземных пещер.
                    Сегодня в санаториях Беларуси воссоздать такие условия стало возможным в помещениях, где стены обложены 
                    блоками соли. Особый микроклимат с высокой ионизацией воздуха, постоянной температурой, низкой 
                    относительной влажностью воздуха и отсутствием аллергенов позволяет лечить огромный спектр заболеваний 
                    органов дыхания, кожи, нервной системы и системы кровообращения.
            </div>
        </div>
        <div style="background-image: url('/speleo/red.png'); background-size: cover;">
            <div class="mx-auto pb-16 Roboto_Regular pt-16" style="width:80vw; text-align:center;font-size:20px; color: white;">
                <b>«Спелеоклиматическая лечебница»</b> монтируется в существующем помещении санатория или в помещениях, 
                соответствующих требованиям  СанПиН №11-7 РБ 2002 и состоит  из спелеоклиматической камеры, комнаты для 
                подготовки пациентов и поста медсестры.<br><br>
                <b>Спелеоклиматическая камера</b> обеспечивает санаторно-курортное лечение, оздоровление и реабилитацию 
                пациентов в условиях микроклимата максимально приближенного к микроклимату естественных и искусственных 
                пещер (рудников, шахт и т.д.)<br><br>
                <b>Спелеокамера</b> – помещение, стены и пол которого облицованы экологически 
                чистыми брикетами (кирпичами) из природных калийных руд Старобинского месторождения.<br><br>
                <b>Спелеоклиматическая камера</b> обустраивается воздухообменным оборудованием 
                (кондиционером канального типа и вытяжным вентилятором), обеспечивающим показатели по воздушной среде.<br><br>
                В помещении спелеокамеры монтируется бактерицидная лампа, электроосвещение, связь, подсветка и музыкальные 
                колонки. Магнитофон устанавливается на посту медсестры.
                </div>
        </div>
        <div>
            <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Спелеокомната “Классик”<br>
            <span style="color:rgba(0, 120, 15, 1);">ООО “ГринПром”</span></div>
            <div class="Roboto_Medium text-center mb-8" style="font-size:25px">Что входит в стоимость строительства соляной комнаты?</div>
            <v-img class="mx-auto mb-10" width="750px" src="/speleo/speleo_klassik.png"/>
            <ul class="Roboto_Medium d-flex justify-center mb-10">
                <ol>
                    <li>Дизайн — проект</li>
                    <li>Монтаж соляных блоков(пол и стены)</li>
                    <li>Элементы дизайна с подсветкой или без</li>
                    <li>Системы вентиляции и микроклимата</li>
                    <li>Аудио система</li>
                    <li>Освещение</li>
                    <li>Электромонтаж оборудования</li>
                    <li>Натяжной потолок</li>
                    <li>Пусконаладочные работы</li>
                    <li>Дополнительные элементы по требованию заказчика</li>
                </ol>
            </ul>
            <div class="Roboto_Medium mx-auto text-center mb-10" style="background:#C1D9C4; border-radius:0px 30px; width:350px;">
                Сроки выполнения — от 30 до 60 дней.</div>
        </div>
        <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Наши работы и материалы 
        <span style="color:rgba(0, 120, 15, 1);">ООО “ГринПром”</span></div>
        <!--картинки листать-->
        <div class="mx-auto mb-16 pt-10">
            <div class="flex-row justify-center grid mb-16">
                    <div class="block_salt">
                    <v-img class="mx-auto mb-8 mt-8" height="180px" width="180px" src="/speleo/speleo1.png"/>
                </div>
                <div class="block_salt">
                    <v-img class="mx-auto mb-8 mt-8" height="180px" width="180px" src="/speleo/speleo2.png"/>
                </div>
                <div class="block_salt">
                    <v-img class="mx-auto mb-8 mt-8" height="180px" width="180px" src="/speleo/speleo3.png"/>
                </div>
            </div>
        </div>
        <div style="background-image: url('/speleo/water_video.png'); background-size: cover; height: 50vw;">
            <div class="d-flex justify-center" style="height:100%">
                <div class="my-auto pt-10">
                    <video ref="videoPlayer" :width="`${isMobile ? '375px': '800px'}`" loop muted controls>
                        <source src="/speleo/mp4/video.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div style="background:#C1D9C4;">
            <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Остались вопросы?</div>
            <div :class="`Roboto_Medium mt-2 ${isMobile ? 'mt-10': ''}`" 
            style=" font-size:16px; text-align:center; line-height: 18px;">
                Оставьте заявку на бесплатный замер.<br>Созвонимся и договоримся о времени выезда.</div>
            <div>
                <v-col :cols="`${isMobile ? '8': '4'}`" justify="center" class="mx-auto" style="height:; margin-top: 4vw;">
                    <v-form ref="form2">
                        <v-text-field :rules="nameRules" label="Имя" v-model="name2" required color="green" outlined 
                        style="border-radius:0px 20px;"/>
                        <v-text-field type="number" color="green" v-model="tel2" maxlength="9" :rules="numberRules" prefix="+375 " required outlined
                        style="border-radius:0px 20px;"/>
                    </v-form>
                </v-col>
                <div class="d-flex justify-center">
                    <button :class="`Roboto_Regular ${isMobile ? 'color_btn1_mobile':'color_btn1'}`" 
                        style="margin-top:20px; margin-bottom:60px;" @click="sendMessage2">
                        Отправить заявку</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.v-carousel__controls {
    height: 35px;
}
.v-carousel__controls__item{
      margin-top: 0;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.my-text-style{
    color: red;
  }

.asd{
  border-radius: 0px;
  box-shadow: none;
}
.forSpeleo{
    border-radius: 0px 20px;
    background: #C1D9C4;
    width:220px;
    height: 50px;
    text-align: center;
}
</style>

<script>
export default {
    methods:{
        sendMessage(){
        if(this.$refs.form.validate()){
                this.$axios.post('/mail.php',{
                key:1,
                name:this.name,
                email: this.email,
                tel : `+375 ${this.tel}`,
                sms: this.sms
            })
            this.dialog=false;
            this.$refs.form.reset()
            }
        },
        sendMessage2(){
        if(this.$refs.form2.validate()){
            this.$axios.post('/mail.php',{
                key: 2,
                name: this.name2,
                tel : `+375 ${this.tel2}`
            })
            this.$refs.form2.reset()
            }
        }
    },
    data(){
        return{
            dialog: false,
            dialog1: false,
            item: 0,
            name:'',
            email:'',
            tel: '',
            sms:'',
            name2:'',
            tel2:'',
            nameRules: [
                v => !!v || 'Укажите имя',
                v => (v && v.length <= 10) || 'Имя должно быть не больше 10 символов',
            ],
            numberRules: [
                v => !!v || 'Укажите номер вашего телефона',
                v => (v && v.length <= 9) || 'Номер телефона должно быть не больше 9 символов',
            ],
            emailRules: [
                v => !!v || 'Укажите вашу почту',
                v => /.+@.+/.test(v) || 'Электронная почта должна быть действующей',
            ],
            slides:{
                slide1: {
                    src1: '/speleo/slide1.png',
                    name: 'Детский санаторий ОАО “Белагроздравница” Налибокская пуща'
                    },
                slide2: {
                    src1: '/speleo/slide2.png',
                    name: 'Детский санаторий ОАО “Белагроздравница” Сосновый бор'
                    },
                slide3:{
                    src1: '/speleo/slide4.png',
                    name: 'Санаторий ОАО«Белагроздравница» Поречье'
                    },
                slide4:{
                    src1: '/speleo/slide5.png',
                    name: 'Санаторий ОАО«Белагроздравница» Березина'
                    },
                },
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
