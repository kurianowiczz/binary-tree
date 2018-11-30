<template>
<div id="tree">
    <input type="text" id="number" v-model="temp" @keypress.13="addToTree">
    <button @click="addToTree">add</button>
    <div id="container">
        <input type="text" id="tree1" v-model="view.elements.value">
        <input type="text" id="tree2" v-model="view.elements.left.value">
        <input type="text" id="tree3" v-model="view.elements.right.value">
        <input type="text" id="tree4" v-model="view.elements.left.left.value">
        <input type="text" id="tree5" v-model="view.elements.left.right.value">
        <input type="text" id="tree6" v-model="view.elements.right.left.value">
        <input type="text" id="tree7" v-model="view.elements.right.right.value">
        <input type="text" id="tree8" v-model="view.elements.left.left.left.value">
        <input type="text" id="tree9" v-model="view.elements.left.left.right.value">
        <input type="text" id="tree10" v-model="view.elements.left.right.left.value">
        <input type="text" id="tree11" v-model="view.elements.left.right.right.value">
        <input type="text" id="tree12" v-model="view.elements.right.left.left.value">
        <input type="text" id="tree13" v-model="view.elements.right.left.right.value">
        <input type="text" id="tree14" v-model="view.elements.right.right.left.value">
        <input type="text" id="tree15" v-model="view.elements.right.right.right.value">
    </div>
    <br> 
    <p>{{ view }}</p>
</div>

</template>

<script>
import Tree from '../model/Tree.js';

/* JAVA
Tree.java:
    public class Tree(){ ... }

Controller.java:
    import package.Tree;

    Tree t = new Tree();
*/

export default {
  name: 'tree',
  data () {
    return {
      view: new Tree(),
      temp: ''
    }
  },
  methods:{
      addToTree(){
          this.view.add(this.temp);
          this.temp = '';
      }
  }
}
</script>

<style scoped>
    *{
		padding: 0;
		margin: 0;
    }
    #container{
        width: 870px;
       
        margin: auto;
        display: grid;
        grid-template-columns: repeat(8, 100px);
        grid-template-rows: repeat(4, 30px);
        grid-gap: 10px;
        grid-row-gap: 10px;
    }
    #tree{
        width: 100%;
        height: 100vh;

    }

    #tree1{
        grid-row: 1;
        grid-column: 1/9;
    }
    #tree2{
        grid-row: 2;
        grid-column: 1/5;
    }
    #tree3{
        grid-row: 2;
        grid-column: 5/9;
    }
    #tree4{
        grid-row: 3;
        grid-column: 1/3;
    }
    #tree5{
        grid-row: 3;
        grid-column: 3/5;
    }
    #tree6{
        grid-row: 3;
        grid-column: 5/7;
    }
    #tree7{
        grid-row: 3;
        grid-column: 7/9;
    }
    
</style>
