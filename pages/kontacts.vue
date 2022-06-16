<template>
    <div>
        <div :class="`${isMobile ? 'zagalovok_mobile': 'zagalovok'}`">Контакты <br><span style="color:#00780F">
            ООО "ГринПром"</span></div>
        <div class="text-center Roboto_Medium"><b>Юридический адрес:</b><br>
            22З710, Республика Беларусь, Минская обл., г.Солигорск,<br>
            Любанское шоссе, 4, к.1<br>
            тел./факс +375 174 240-250,<br>
            8 (029) 6 945 943<br>
            Р/с BY03 BPSB 3012 1419 3201 1933 0000<br>
            Центр банковских услуг №503<br>
            г. Солигорск, OAO «БПС-Сбербанк»<br> 
            BIC BPSBBY2X<br>
            УНП 600513168, ОКПО 290512836000<br>
            <span style="color:#00780F"><b>greenprom@mail.ru</b></span>
            <br><br><b>Почтовый адрес:</b><br>
                223710, Минская обл., г.Солигорск, ул.К.Заслонова, д.52а, кв.17<br>
                <b>Моб.тел.<br>
                +375 29 61 78 039 (менеджер Людмила)</b>
            <br><br><b>В России </b>наши интересы<br>
            представляет компания<br>
            <b>ООО "Дигидон"</b><br> <b>тел. +7 (495) 228-77-67</b>
            <br><b>E-mail: digidon@digidon.org</b>
        </div>
        <div class="d-flex justify-center">
            <v-img max-width="400px" src="water_kontact.png"/>
        </div>
    </div>
</template>

<script>
export default ({
  computed:{
    isMobile:{
      get(){
        return this.$store.getters.isMobile;
      }
    },
  }
})
</script>
