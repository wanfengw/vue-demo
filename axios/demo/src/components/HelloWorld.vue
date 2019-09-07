<template>
  <div class="hello">
    <router-link to='/demo-axios' tag='span'>demo</router-link>
    <router-link to='/mini-ui'>miniUi</router-link>
    <a @click="handleClick">demo</a>
    <h1 id='app'>{{ msg }}</h1>
    <button type="button" @click="test" class="btn btn-success">test</button>
    <button type="button" @click="getData">btn</button>
    <ul v-for="item in films" :key="item.filmId">
      <li>
        <img :src="item.poster">
      </li>
      <li>{{item.name}}</li>
      <li>{{item.category}}</li>
      <li>{{item.synopsis}}</li>
    </ul>
      <template>
        <el-table
          :data="films"
          style="width: 100%">
          <el-table-column
            prop="director"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="category"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="nation"
            label="地址">
          </el-table-column>
        </el-table>
      </template>
      {{$store.state.count}}
      <button class="btn btn-success" @click="$store.commit('increment')">+ 1</button>
      
      <button class="btn btn-danger" @click="$store.commit('reduce')">- 1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App linjin',
      films: null
    }
  },
  methods: {
    getData () {
      console.log('kk')
      this.$axios({
        method: 'get',
        url: 'http://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4459112',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156769422810097468113224"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => { this.films = res.data.data.films })
    },
    test(){
      $('#app').text('aaa')
    },
    toDemo(){
      this.$router.push('/demo-axios')
    },
    handleClick: function() {
      this.$toast('Hello world!')
    }
  },
  mounted(){
    
  }
}
</script>
<style>
  .router-link-active{
    color: aqua;
  }
</style>