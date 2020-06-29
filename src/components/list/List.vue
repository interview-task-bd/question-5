<template>
  <div>
      <div v-for="(task, index) in filterOption" :key="'task-'+index" class="alert alert-primary m-2" 
            role="alert">
        <div class="row" >
            <div class="col-9" v-bind:class="{ 'line-throw': task.completed }" >{{ task.title }}</div>
            <div class="col-1"><button class="btn btn-sm btn-block btn-danger" @click.prevent="removeTodo(index)"> &times; </button></div>
            <div class="col-1"><button class="btn btn-sm btn-block btn-light"  @click.prevent="completeTodo(index)">{{ task.completed ? '&#9989;' : ' &#x274F;'}}</button></div>
            <div :id="task.id" class="col-1">
                <button class="btn btn-sm btn-block btn-light" @click="showModal(task.id)"> &#128065; </button>
            </div>
        </div> 
    </div>
     <modal-component ref="modal"/>
  </div>
</template>

<script>
import {TodoMixin} from '../mixin/TodoMixin.js';
import ModalComponent from '../modal/modal.vue';

export default {
    name:"ListComponent",
    components:{
        ModalComponent
    },
    props:{
        filterOption:{}
    },
    mixins: [TodoMixin],

    created(){
        
        this.$parent.$on('update', this.setValue);
    },
    
    


    methods: {
        setValue: function(value) {
            this.value = value;
         },
        removeTodo(index){
            this.$store.dispatch('removeTodo', index);
        },
        completeTodo(index){
            this.$store.dispatch('completeTodo', index);
        },
        showModal(id) { 
            this.$refs.modal.showModal()
            this.$store.dispatch('viewTodo',id)
        }

    }
    
}
</script>