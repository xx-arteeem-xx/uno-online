<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {
            if (sessionStorage.getItem("token") !== "token") {
                sessionStorage.clear();
                this.$router.push("/login");
            }
        }
    }
</script>

<template>

</template>

<style></style>