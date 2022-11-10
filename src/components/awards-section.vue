<script setup>

</script>

<template>
<div class="wrap">
    <div class="title">
        <h1>獎項</h1>
    </div>
    <div class="awards">
        <div class="item" data-aos="fade-down"  data-aos-delay="900">
            <img src="../assets/img/groupaward.png" alt="">
            <p>每個關卡各 1 組</p>
        </div>
        <div class="item" data-aos="fade-down"  data-aos-delay="600">
            <img src="../assets/img/Rectangle.png" alt="">
            <p>每個關卡各 2 名，設計 1 名、前端 1 名</p>
        </div>
        <div class="item" data-aos="fade-down"  data-aos-delay="300"> 
            <img src="../assets/img/shortlisted.png" alt="">
            <p>每個關卡個人組十位、團體組十組</p>
        </div>
    </div>
    <div class="remind">
        <p>以上皆提供完賽數位獎狀</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wrap{
    .awards{
        display: flex;
        flex-flow: column-reverse;
        text-align: center;
        width: 100%;
        .item{
            padding:20px 10px;
            img{
                width: 100%;
            }
        }
    }
    .remind{
        font-weight: 400;
        font-size: 30px;
        line-height: 43px;
        text-align: center;
        margin: 50px 15px;
    }
}
@media (min-width: 768px) {
    .wrap{
            .awards{
        flex-flow:row;
        justify-content: space-around;
        padding: 50px 0;
    }
    }

}
</style>
