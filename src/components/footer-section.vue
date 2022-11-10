<script setup>

</script>

<template>
<div class="wrap">
    <div class="studio">
        <img src="../assets/img/jira 1.png" alt="">
        <img src="../assets/img/confluence.png" alt="">
        <img src="../assets/img/miro.png" alt="">
        <img src="../assets/img/dot.png" alt="">
    </div>
    <div class="sponser">
        <div class="title"><h1>贊助單位</h1></div>
        <div class="images">
            <div class="item"><img src="../assets/img/blockstudio.png" alt=""></div>
            <div class="item"><img src="../assets/img/kdan.png" alt=""> </div>
            <div class="item"><img src="../assets/img/titansoft.png" alt=""> </div>
        </div>
            
            
    </div>
    <p class="footer">六角日報 © Code: Alex  /  Design: KT</p>
</div>
</template>

<style lang="scss" scoped>
.wrap{
    .studio{
        background-color: #fff;
        text-align: center;
        img{
            padding: 20px;
        }
    }
    .sponser,.footer{
        background-color:var(--primary-color);
        text-align: center;
        color: #fff;
        padding: 5px;
        img{
                padding: 20px;
                width: 80%;
        }

    }

}
@media (min-width: 768px) {
    .images{
            display: flex;
            justify-content: space-around;

        }
}
</style>