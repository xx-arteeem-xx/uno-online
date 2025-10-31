<script>
    import Cards from '@/components/Cards/Cards.vue';
    import CheckAuth from '@/components/Utils/CheckAuth.vue';
    import LogoutBtn from '@/components/Utils/LogoutBtn.vue';

    function getRandomInt(min, max) {
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    export default {
        components: { CheckAuth, LogoutBtn, Cards },
        data(){
            return{
                cards: [],
                opponentCards: [],
                currentCard: {},
                deck: [],
                title: "UNO",
                opponentTitle: "",
                tableTitle: "",
                disableGet: false,
                disableReload: true,
                gameStatus: "wait",
                getRandomInt
            }
        },
        watch: {
            gameStatus(newStatus, oldStatus) {
                switch (newStatus) {
                    case "wait":
                        this.title = "UNO";
                        this.opponentTitle = "";
                        this.tableTitle = "";
                        this.disableGet = false;
                        this.disableReload = true;
                        this.cards = [];
                        this.opponentCards = [];
                        this.currentCard = {};
                        this.deck = [];
                        this.getDeck();
                        break;
                        
                        case "game":
                            this.title = "Ваши карты:";
                            this.opponentTitle = "Карты соперника:";
                            this.tableTitle = "Стол:";
                            this.disableGet = true;
                            this.disableReload = false;
                            break;

                    default:
                        break;
                }
            }
        },
        methods: {
            getRandomCards() {
                for (let i = 0; i < 15; i++) {
                    let cardNumber = this.getRandomInt(0, this.deck.length-1)
                    const data = this.deck[cardNumber];
                    this.deck.splice(cardNumber, 1);
                    if (i < 7) {
                        this.cards[i] = data;
                    }
                    else if (i < 14) {
                        this.opponentCards[i-7] = data;
                    } else {
                        this.currentCard = data
                    }
                };

                this.gameStatus = "game";
            },
            clearCards() {
                this.gameStatus = "wait";
            },
            getDeck() {
                const colorArray = ["red", "green", "blue", "yellow"];
                const actionArr = ["+2", "ban", "arrow"];

                for (let m = 0; m < 2; m++) {
                    let startFrom = 0;
                    if (m > 0) {
                        startFrom = 1;
                    };
                    for (let i = startFrom; i < 10; i++) {
                        for (let j = 0; j < colorArray.length; j++) {
                            const color = colorArray[j];
                            const value = i;
                            const data = {
                                color, value
                            }
                            this.deck.push(data);
                        };
                    };

                    for (let i = 0; i < actionArr.length; i++) {
                        for (let j = 0; j < colorArray.length; j++) {
                            const color = colorArray[j];
                            const value = actionArr[i]; 
                            const data = {
                                color, value
                            }
                            this.deck.push(data);
                        };
                    };
                };

                const actionBlackArr = ["color", "+4"];
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < actionBlackArr.length; j++) {
                        const color = "black";
                        const value = actionBlackArr[j];
                        
                        const data = {
                            color, value
                        };
                        this.deck.push(data);
                    };
                };
                
            }
        },
        mounted() {
            this.getDeck();
        }
    }
</script>

<template>
    <CheckAuth />
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1 class="fw-bold">{{ title }}</h1>
            </div>
            <div class="col">
                <button class="btn btn-success fw-bold btn-lg" type="button" @click="getRandomCards()" :disabled="disableGet">
                    <i class="fa-solid fa-check"></i>
                    Начать игру
                </button>
            </div>
            <div class="col">
                <button class="btn btn-warning fw-bold btn-lg" type="button" @click="clearCards()" :disabled="disableReload">
                    <i class="fa-solid fa-arrows-rotate"></i>
                    Начать заново
                </button>
            </div>
            <div class="col">
                <LogoutBtn />
            </div>
        </div>

        <div class="d-flex gap-2 align-items-center">
            <Cards v-for="card in cards" :color="card.color" :value="card.value" />
        </div>

        <h1 class="fw-bold">{{ tableTitle }}</h1>
        <div class="d-flex gap-2 align-items-center" v-if="gameStatus === 'game'">
            <Cards :color="currentCard.color" :value="currentCard.value" />
            <Cards :color="'black'" :value="`UNO - ${deck.length}`" />
        </div>


        <h1 class="fw-bold">{{ opponentTitle }}</h1>
        <div class="d-flex gap-2 align-items-center">
            <Cards v-for="card in opponentCards" :color="card.color" :value="card.value" />
        </div>
    </div>

    
</template>

<style></style>