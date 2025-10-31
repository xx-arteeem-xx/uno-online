<script>
    import CheckAuth from '@/components/Utils/CheckAuth.vue';
    import LogoutBtn from '@/components/Utils/LogoutBtn.vue';

    export default {
        components: { CheckAuth, LogoutBtn },
        data(){
            return{

            }
        },
        methods: {

        }
    }
</script>

<template>
    <CheckAuth />
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1 class="fw-bold">TEST PAGE!!!</h1>
            </div>
            <div class="col">
                <LogoutBtn />
            </div>
        </div>
    </div>

    
</template>

<style></style>