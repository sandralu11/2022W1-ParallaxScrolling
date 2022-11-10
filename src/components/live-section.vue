<template>
<div class="wrap">
<Transition mode="out-in">
    <div class="part-2" v-if="show">
        <div class="title">
        <h1>各界大神直播分享</h1>
        </div>
        <div class="items">
        <div class="item">
            <div class="topic">
                <h2>網站的動態趨勢</h2>
            </div>
            <img src="../assets/img/teacher1.gif" alt="">
            <div class="speaker">
                <p>李明</p>
                <p>版塊設計創辦人兼總監</p>
            </div>
            <p class="time">11/03(四)20:00 ~ 21:30</p>
        </div>
        <div class="item">
            <div class="topic">
                <h2>jQuery 也可以做到的互動效果</h2>
            </div>
            <img src="../assets/img/teacher2.gif" alt="">
            <div class="speaker">
                <p>Leo</p>
                <p>Angular Taiwan 傳教士</p>
            </div>
            <p class="time">11/10(四)20:00 ~ 21:30</p>
        </div>
        <div class="item">
            <div class="topic">
                <h2>網頁可以拖拖拉拉draggable.js 介紹</h2>
            </div>
            <img src="../assets/img/teacher3.gif" alt="">
            <div class="speaker">
                <p>邱繼緯</p>
                <p>前端工程師</p>
            </div>
            <p class="time">11/17(四)20:00 ~ 21:30</p>
        </div>
        <div class="item">
            <div class="topic">
                <h2>互動式網頁設計工程師該具備哪些技能？</h2>
            </div>
            <img src="../assets/img/teacher4.gif" alt="">
            <div class="speaker">
                <p>吳哲宇</p>
                <p>墨雨互動設計創辦人</p>
            </div>
            <p class="time">11/24(四)20:00 ~ 21:30</p>
        </div>
        </div>    
    </div>
    <div class="part-1" v-else>
        <h2>意想不到的好康</h2>
        <h3 @click="show=true">請點擊</h3>
    </div>
</Transition>
</div>
</template>


<script setup>
import { ref } from "@vue/reactivity";

const show = ref(false)
</script>
<style lang="scss" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.wrap{
    .part-1{
        h2, h3{
            font-weight: 900;
            font-size: 72px;
            line-height: 103px;
            text-align: center;
        }
        h3{
            color: var(--red-color);
        }
    }
    .items{
        
        .item{
            position: relative;
            padding: 30px 15px 20px;
            img{
                width: 100%;
            }
            .topic{
                width: 80%;
                position: absolute;
                top: 9%;
                left: 10%;
                h2{
                font-weight: 900;
                font-size: 30px;
                line-height: 40px;
                text-align: center;
                }
            }

            .speaker{
                position: absolute;
                left: 22%;
                top: 80%;
                padding: 5px;
                width: 55%;
                background:url('../assets/img/name.png');
                p{
                    color: #FFF;
                    text-align: center;
                    font-size: 16px;
                    line-height: 18px;
                }
            }
            .time{
                position: absolute;
                left: 20%;
                top: 89%;
                font-weight: 900;
                font-size: 20px;
                padding: 5px;
            }
        }
    }
}
@media (min-width: 768px) {
.wrap{
.items{
    max-width: 1280px;
    margin: auto;
    padding: 50px;
    .item{
        width: 50%;
        display: inline-block;
        .topic{
            h2{
            font-size: 47px;
            line-height: 60px;
            }
        }
        .speaker{
            p{
                font-size: 20px;
                line-height: 30px;
            }
        }
        .time{
            font-size: 33px;

        }
    }
}
}

}
</style>