<template>
    <Navbar/>
    <div class="row justify-content-md-center" v-if="isLoading">
        <div class="col-3 alert-info text-center mt-5">
            Espere porfavor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>

    <div v-else class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';
import Navbar from '../components/navbar.vue';
import EntryList from '../components/EntryList.vue';
export default {
    components: {Navbar, EntryList},
    methods: {
        ...mapActions('journalModule', ['loadEntries']),
       
    computed: {
        ...mapState('journalModule',['isLoading'])
    },
    },
    created() {

        this.loadEntries()
    }
}
</script>