<template>
  <div>
    <b-modal ref="modal" title="view">
      <div class="d-block">
          <div class="row">
            <div class="col-12">
              <h2 class="title">Task No: {{todo.id && todo.id}}:</h2>
               <h3 class="h3">Task Title: {{todo.title && todo.title}}</h3>
               <p> Description: {{todo.description && todo.description}} </p>
            </div>
          </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {BModal} from 'bootstrap-vue'
import {TodoMixin} from '../mixin/TodoMixin'

  export default {
   
    name:'ModalComponent',
    mixins:[TodoMixin],
    components:{
        BModal,
    },

  
    methods: {
      showModal() {
        this.$refs['modal'].show()
        
      },
      hideModal() {
        this.$refs['modal'].hide()
      },
      toggleModal() {
        this.$refs['modal'].toggle('#toggle-btn')
      }
    }
  }
</script>

