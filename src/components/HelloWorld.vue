<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="HelloTips">按钮</button>
    <h2>count: {{count}}</h2>
    <button @click="addCount()">addc</button>
    <br>
    <br>
    <div>GetHello: {{GetHello}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

interface HelloDataType {
  a: string,
  b: number,
}

interface DataSb {
  a: string,
}

@Component
export default class HelloWorld extends Vue {
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
    console.log(newVal, oldVal)
  }

  mounted () {
    console.log(this.msg)
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
