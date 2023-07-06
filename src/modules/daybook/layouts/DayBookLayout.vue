<template>
    <Navbar/>
    <div class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import EntryList from '../components/EntryList.vue';
export default {
    components: {Navbar, EntryList},
}
</script>