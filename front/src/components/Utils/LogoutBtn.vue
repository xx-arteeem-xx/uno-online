<script>
    export default {
        props: ["logoutText"],
        data () {
            return {

            }
        },
        methods: {
            logout() {
                sessionStorage.clear();
                this.$router.push("/login")
            }
        },
        mounted() {

        }
    }
</script>

<template>
    <button class="btn btn-danger btn-lg" type="button" @click="logout()">
        <i class="fa-solid fa-right-from-bracket"></i>
        {{ logoutText }}
    </button>
</template>

<style></style>