<template>
     <div class="container">
        <div class="row">
            <div class="col-12" style="width:100px">
                <div class="m-5">
                <div class="card bg-light">
                  <div class="card-header">
                      <div class="card-title text-primary text-center">
                          <img src="@/assets/wedevs-logo-colored.svg"/>
                          <div>Wedevs ToDo App</div>
                      </div>
                  </div>
                  <div class="card-body">
                      <form-component/>
                  </div>

                  <div class="card-footer" v-if="todos.length>0">  

                        <input type="radio" class="ml-3" value="ALL" id="one" v-model="filterOption" >  <span>All</span>
                        <input type="radio" class="ml-3" value="ACTIVE" id="two" v-model="filterOption" > <span>Active</span>
                        <input type="radio" class="ml-3" value="COMPLETED" id="three" v-model="filterOption" > <span>Completed</span> 
                        <div class="text-right"> left Item : {{filterTask.length}}</div>

                    <list-component :filterOption="filterTask"/>

                  </div>
                </div>
                </div>
            </div>
        </div>
     
    </div>
</template>

<script>
import FormComponent from '../form/Form.vue'
import ListComponent from '../list/List.vue'
import { TodoMixin } from '../mixin/TodoMixin'


export default {
    name:"Card",
    mixins:[TodoMixin],
    
    components:{
        FormComponent,
        ListComponent,
    },
    data(){
        return {
            isActive : false,
            filterOption:'ALL'
        }
    },



     computed: {
        filterTask(){
             switch(this.filterOption){
                 case "ALL":
                     return this.$store.getters.all
                 case "COMPLETED":
                     return this.$store.getters.completed
                 case "ACTIVE":
                    return this.$store.getters.active
                default:
                    return this.$store.getters.all
             }
        }
        
    },
    
    methods:{
      
    }
}
</script>


