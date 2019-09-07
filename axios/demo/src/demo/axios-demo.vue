<template>
  <div id="app">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <button type="button" @click="getData">btn</button>
  </div>
</template>

<script>

export default {
    name:'axios',
    data(){
        return{
            film:{

            }
        }
    },
    methods:{
        getData(){
            console.log('kk')
            this.$axios({
                method: 'get',
                url: 'http://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4459112',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156769422810097468113224"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res=>{console.log(res)})
        }
    },
    mounted(){   
    }
}
</script>

<style>
</style>