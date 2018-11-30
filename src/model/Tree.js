import treeConstructor from '../components/json/tree.json';

//module.exports = { ... }
//var tree = require('./tree.js')

export default class Tree{
    constructor(){
        this.elements = treeConstructor;
    }

    add(value){
        let tempTree = this.elements;
        while (true) {
            if (tempTree.value === null || tempTree.value === ''){
                tempTree.value = value;
                return;
            } else if (Number(value) < Number(tempTree.value)) {
                tempTree = tempTree.left;
            } else if (Number(value) > Number(tempTree.value)) {
                tempTree = tempTree.right;
            }
        }
    }

}