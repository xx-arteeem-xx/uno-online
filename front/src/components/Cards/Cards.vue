<script>
    export default {
        props: ["color", "value"],
        data () {
            return {
                bgClass: "",
                valueClass: ""
            }
        },
        watch: {
            color() {
                this.setCardColor()
            },
            value() {
                this.setCardIcon()
            }
        },
        methods: {
            setCardColor() {
                switch (this.color) {
                    case "red":
                        this.bgClass = "bg-danger"
                        break;
                    case "blue":
                        this.bgClass = "bg-info"
                        break;
                    case "green":
                        this.bgClass = "bg-success"
                        break;
                    case "yellow":
                        this.bgClass = "bg-warning"
                        break;
                    case "black":
                        this.bgClass = "bg-black"
                        break;
                    
                    default:
                        break;
                }
            },
            setCardIcon() {
                switch (this.value) {
                    case "arrow":
                        this.valueClass = "fa-arrows-rotate";
                        break;
                    case "color":
                        this.valueClass = "fa-palette";
                        break;
                    case "ban":
                        this.valueClass = "fa-ban";
                        break;
                
                    default:
                        this.valueClass = "";
                        break;
                }
            }
        }, 
        mounted() {
            this.setCardColor();
            this.setCardIcon();
        }
    }
</script>

<template> 
    <div class="unoCard rounded-3 d-flex align-items-center justify-content-center" :class="bgClass">
        <h3>
            <span v-if="valueClass == ''">
                {{ value }}
            </span>
            <i class="fa-solid" :class="valueClass" v-else></i>
        </h3>
    </div>
</template>

<style>
    .unoCard {
        width: 150px;
        height: 280px;
    }
</style>