<template>
    <template v-if="entry"  >
        <div  
    class="entry-title d-flex justify-content-between p-2">
        <div>
        <span class="text-success fs-5 fw-bold">{{day}}</span>
        <span class="mx-1 fs-3">{{month}}</span>
        <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                borrar 
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                subir foto 
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea
        v-model="entry.text"
        placeholder="que paso el dia de hoy?"
        ></textarea>
    </div>
    <Fab 
    @on:click="save_entry"
    icon="fa-save"/>
    <img src="../../../../public/fondo.jpeg"
     alt="entry-picture"
     class="img-thud">
    </template>
   
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { defineAsyncComponent } from 'vue';
import getDayMonthYear from '../helpers/getDayMonthYear'
export default {
    props: {
        id: {
            type:String,
            required:true
        }
    },
    components: {
        Fab: defineAsyncComponent(() => import('../components/Fab.vue')  )
    },
    computed:{
        ...mapGetters('journalModule',['getEntriesByID']),
        day() {
            const { day} = getDayMonthYear(this.entry.date)
            return day
        },
        month() {
            const { month} = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay} = getDayMonthYear(this.entry.date)
            return yearDay
        },
    },
    data() {
        return {
            entry:null,
        }
    },
    methods: {
        ...mapActions('journalModule', ['updateEntry','createEntry']),
        loadEntry() {
            let entry;
            if(this.id === 'new'){
                entry = {
                    text: '',
                    date: new Date().getTime(),
                }
            }else{
            entry = this.getEntriesByID(this.id);
            if(!entry) return this.$router.push({name:'no-entry' })
            }
            this.entry = entry
           
        },
     async   save_entry() {
            if(this.entry.id){
              await  this.updateEntry(this.entry);
             } else {
                const id = await this.createEntry(this.entry);
                console.log(id);
                this.$router.push({name:'entry', params: {id: id}})
             }

            }
            
    },
    created(){
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}

</script>

<style lang="scss" scoped>
 textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }

 }
img {
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha:0.2);
}


</style>