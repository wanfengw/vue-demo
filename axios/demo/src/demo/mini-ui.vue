<template>
  <div>
      <!-- <mt-search v-model="value"></mt-search> -->
   
    <mt-button type="default" @click="btn">btn</mt-button>
    <mt-button type="primary" @click="btnIndicator">btn-pri</mt-button>
    <mt-button type="danger" @click="btn">btn-dan</mt-button>
    <i class="fas fa-camera" style="color: Tomato;"></i> 
    <i class="fad fa-laugh-wink"></i>
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
export default {
    name:'miniUi',
    data(){
        return{
            value:''
        }
    },
    methods:{
        btn(){
            // Toast('Hello world!')
            Toast({
                message:'提示',
                position:'top',
                duration:1000,
                iconClass: 'fas fa-font-awesome',
                className:'icon'
            })
        },
        btnIndicator(){
            Indicator.open('loading')
            setTimeout(()=>{
                Indicator.close()
            },2000)
        }
    }
}
</script>

<style>
    .icon svg{
        color: rgb(0, 255, 157) !important;
    }
</style>