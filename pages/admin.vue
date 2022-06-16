<template>
    <div class="d-flex fill_height" style="width:100%;position:relative; height:100%">
        <div class="d-flex mx-auto my-auto">
            <div class="block_admin">
                <div class="d-flex justify-center flex-column mt-5">
                    <v-col class="d-flex justify-center">
                        <v-form ref="form">
                            <v-text-field label="Логин" :error="error" :rules="[requre]" v-model="login" color="green" outlined
                            style="border-radius:0px 20px; width:250px; height:80px !important"/>
                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
                            :type="show1 ? 'text' : 'password'" :error="error" :rules="[requre]" @click:append="show1 = !show1" counter
                            color="green" label="Пароль" required outlined
                            style="border-radius:0px 20px;width:250px;"/>
                        </v-form>
                    </v-col>
                    <v-col>
                        <div class="d-flex justify-center">
                            <div class="d-flex justify-center align-center color_btn1"
                            style="width:150px; text-decoration:none; color:black" @click="click">
                            Войти</div>
                        </div>
                    </v-col>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.block_admin{
    background: rgba(141, 185, 145, 0.5);
    box-shadow: inset 0px 4px 30px rgba(255, 255, 255, 0.25), inset 0px 4px 18px rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    width:400px; 
    height:300px;
    border-radius:0px 20px;
}
</style>
<script>

export default{
    layout: 'admin',
    methods:{
        requre(value){
                if(!value){
                    return 'недопустимо пустое поле'
                }
                if(this.error){
                    setTimeout(()=>{
                        this.error=false
                    },1500)
                    return 'Проверьте введенные данные'
                }
                return true
        },
        click(){
            if(this.$refs.form.validate()){
                this.$axios.post('/api/admin',{'login': this.login,'password': this.password}).then(result=>{
                    if (result.data.status=='ok'){
                        this.$store.commit('setLoginOn');
                        this.$router.push('/my_salts')
                    }else{
                        this.error=true;
                        this.$refs.form.validate()
                    }
                })
            }
        }
    },
    data(){
        return{
            show1: false,
            login: '',
            password: '',
            error: false,
        }
    },
    setup() {
        
    },
    created(){
        /*this.$axios.get('/api/admin').then(result=>{
            console.log(result)
        })*/
    }
}
</script>
