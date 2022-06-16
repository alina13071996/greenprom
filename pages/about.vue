<template>
    <div>
        <div :class="`${isMobile ? 'zagalovok_mobile mt-3 pb-2': 'zagalovok'}`">О компании <span style="color:#00780F">ООО "ГринПром"
            </span></div>
        <div :class="`${isMobile ? 'block_gradient_mobile': 'block_gradient mx-auto'}`" style="font-size:20px;">
            <p><span style="color:#00780F"><b>ООО “ГринПром”</b></span> - производственная фирма, организованная в 2000 году.</p>
            <p><b>Основной вид деятельности:</b></p>
            <ul style="text-align: left; margin-left:50px;"> 
                <li>производство соли морской природной для ванн с макро- и микроэлементами, обогащение её натуральными 
                маслами и экстрактами;</li>
                <li>производство соляных брикетов для бань, спелеокомнат, комнат отдыха;</li>
                <li>изготовление солевых ламп;</li>
                <li>строительство спелеокомнат под ключ.</li>
            </ul><br>
            <p><b>Наша продукция</b> - "Соль «Морская» природная для ванн" прошла все клинические испытания, соответствует 
                ТУ BY 600513168.001-2011г. Регистрационное удостоверение Минздрава РБ № ИМ -7.106084 от 11.01.2018г., 
                имеется регистрация декларации о соответствии таможенного союза ЕАЭС № BY/112 11.01. ТР009 043 14182. 
                Используется, как <i><b>изделие медицинского назначения, а также для косметических процедур</b> с «Инструкцией по 
                применению соли морской природной».</i></p>
                <p>Более 13  лет успешной работы на лечебно-профилактическом 
                    и парфюмерно-косметическом рынке Беларуси, России, Чехии.</p>
                <p>Получаем положительные отзывы от наших постоянных клиентов по Беларуси: 
                    (санаторий «Энергетик», санаторий «Вяжути», санаторий «Рассвет-Любань», 
                    УЗ Минская областная клиническая больница, санаторий «Березина» г. Борисов, 
                    др. санаториев  ОАО " Белагроздравница").</p>
        </div>
        <div :class="`${isMobile ? 'zagalovok_mobile pt-2 pb-2': 'zagalovok'}`">Преимущества работы<br><span style="color:#00780F">
            ООО "ГринПром"</span></div>
        <div class="d-flex flex-column mx-auto mt-16" style="width:70vw;">
            <div v-for="(preim, i) in preimuzh" :value="i" :key="i" class="d-flex  flex-row mb-10">
                <div class="mr-5"><v-img height="50px" width="50px" :src="preim.icon"/></div>
                <div class="Roboto_Regular my-auto" style="font-size:20px; align-text:center">{{preim.text}}</div>
            </div>
        </div>
        <div  :class="`${isMobile ? 'zagalovok_mobile pb-5': 'zagalovok'}`">Сертификаты, лицензии, методическая<br>
         документация <span style="color:#00780F">ООО “ГринПром”</span></div>
         <v-sheet class="mx-auto" max-width="1100">
             <v-slide-group show-arrows>
                <v-slide-item v-for="(block, i) in blocks" :value="i" :key="i">
                    <div class="block_salt mr-16">
                        <!--<v-img class="image" :src="block.src" style="margin:30px; height: 300px;"/>-->
                        <!--открыть изображение-->
                            <div class="d-flex justify-center" color="transparent" style="margin:30px; height: 300px;">
                                <v-img @click="OpenDialogDocument(block.files)" :src="block.src"/>
                            </div>
                            <!--открыть изображение/-->
                        <!--<div class="Roboto_Medium d-flex justify-center" style="height:80px;text-align: center;
                         background:rgba(0, 0, 0, 0.3); color: white; border-radius: 0px 0px 0px 30px; ">
                            <div class="my-auto" style=" text-align:center;">{{ block.name }}</div>
                        </div>-->
                    </div>
                </v-slide-item>
             </v-slide-group>
         </v-sheet>
        <div class="mt-16">
            <v-img src="/about/image.png">
                <div class="Roboto_Medium d-flex justify-center align-center" style="font-size:2.5vw;color:white; 
                line-height:2.5vw;text-align:center; height:100%">Рассчитываем на взаимовыгодное сотрудничество</div>
            </v-img>
        </div>
        <v-dialog v-model="dialogDocuments.isDialog" class="dialog">
            <div class="d-flex justify-end" style="position: fixed"><button class="pr-10" @click="dialogDocuments.isDialog = false">
                    <v-icon color="white">mdi-close</v-icon></button></div>
            <div ref="form" elevation="0" style="text-align:center">
                <template v-if="dialogDocuments.isDialog" class="d-flex">
                    <v-img class="mx-auto" width="50vw" v-for="(file,i) in dialogDocuments.files" :key="i" :src="file"/>
                </template>
            </div>
        </v-dialog>
    </div>
</template>

<style>
.v-dialog::-webkit-scrollbar{
    display: none;
}
.v-dialog{
    margin:0px; 
    box-shadow:none;
}
.v-slide-group__content{
    white-space: normal;
}
.block_gradient{
    border-radius: 0px 20px;
    background: linear-gradient(#C1D9CF,rgba(193, 217, 196, 0));
    font-size: 17px;
    text-align: center;
    width:70vw;
}
.block_gradient_mobile{
    border-radius: 0px 20px;
    background: linear-gradient(#C1D9CF,rgba(193, 217, 196, 0));
    font-size: 17px;
    text-align: center;
    width:100vw;
}
</style>

<script>
export default {
    methods:{
        OpenDialogDocument(files){
            this.dialogDocuments.files=files;
            console.log(files);
            this.dialogDocuments.isDialog=true;
        }
    },
    data(){
    return{
        dialogDocuments:{
            isDialog: false,
            files: [],
        },
        preimuzh: this.$store.getters.getPreimuzh,
        blocks:{
                block1: {
                    src: '/about/image1.png',
                    name: 'Методические указания воздушной среды в помещении “Спелеоклиматическая лечебница”',
                    files: ['/about/image1_1.jpg','/about/image1_2.jpg','/about/image1_3.jpg','/about/image1_4.jpg']
                    },
                block2: {
                    src: '/about/image2.png',
                    name: 'Декларация о соответствии',
                    files: ['/about/image2_1.jpg','/about/image2_2.jpg']
                    },
                block3:{
                    src:'/about/image3.png',
                    name: 'Регистрационное удостоверение “Соли природные морские”',
                    files: ['/about/image3_1.jpg','/about/image3_2.jpg']
                    },
                block4:{
                    src: '/about/image4.jpg',
                    name: 'Свидетельство о государственной регистрации коммерческой организации',
                    files: ['/about/image4.jpg']
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
    }
}

</script>
