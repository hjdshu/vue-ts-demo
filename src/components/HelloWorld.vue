<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="HelloTips">按钮</button>
    <h2>count: {{count}}</h2>
    <button @click="addCount()">addc</button>
    <br>
    <br>
    <div>GetHello: {{GetHello}}</div>
    <br>
    <br>
    <div>vuex count: {{countShop}}</div>
    <button @click="addCountShopMethod">countShopadd</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import actions from '../store/actions'
import {
  State,
  Getter,
  Action,
  Mutation
} from 'vuex-class'

interface HelloDataType {
  a: string,
  b: number,
}

@Component
export default class HelloWorld extends Vue {
  @State countShop: StoreState.countShop;
  @State other: StoreState.other;
  @Action(actions.addCount) addCountShop: StoreAction.addCountShop;

  public addCountShopMethod () {
    this.addCountShop(3)
  }

  @Prop() private msg!: string;

  // 已经赋值的变量不需要申明type
  private count = 0
  public addCount () {
    this.count ++
  }

  private helloData: HelloDataType = {
    a: '1',
    b: 2  
  }

  /**
   * HelloTips
   */
  public HelloTips () {
    alert(111)
  }

  public get GetHello () {
    return this.msg
  }
  

  /**
   * setHelloA
   */
  public setHelloA() {
    // this.helloData.a = '2'
  }
  
  @Watch('count')
  watchCount (newVal: string, oldVal: string) {
    // console.log(newVal, oldVal)
  }

  mounted () {
    console.log(this.other.name)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
