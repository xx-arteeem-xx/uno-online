<script>

import { api } from "@/utils/api"


export default {
    data() {
        return {
            username: "",
            password: "",
            error: "",
            api
        }
    },
    methods: {
        auth() {
            if ((this.username === "user") && (this.password === "1234")) {
                sessionStorage.setItem("token", "token");
                this.$router.push("/");
            } else {
                sessionStorage.clear();
                this.error = "Неправильный логин или пароль!"
            }
        }
    },
    mounted() {
        if (sessionStorage.getItem("token") === "token") {
            this.$router.push("/");
        } else {
            sessionStorage.clear();
        };

        const form = document.getElementById('loginForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
        });
    },
}
</script>

<template>
    <div class="container">
        <div class="row d-flex justify-content-center mt-5">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="bg-body-tertiary p-5 rounded-3">
                    <div class="alert alert-danger" role="alert" v-if="error != ''">
                        {{ error }}
                    </div>
                    <h3 class="fs-2 mb-4">
                        Вход в UNO Online
                    </h3>
                    <form id="loginForm">
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa fa-user" aria-hidden="true"></i>
                            </span>
                            <input type="text" class="form-control" v-model="username" name="username" id="username" placeholder="Имя пользователя">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </span>
                            <input type="password" class="form-control" v-model="password" name="password" id="password" placeholder="Пароль">
                        </div>
                        <button type="submit" class="btn btn-info" @click="auth">
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>