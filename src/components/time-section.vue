<script setup>

</script>

<template>
<div class="wrap">
    <div class="title">
        <h1>賽程時間</h1>
    </div>
    <div class="scroll-box">
        <div class="time">
            <div class="time-line ">
                <p class="memo">開始報名</p>
                <i class='bx bxs-square red-box '></i>
                <p class="info">10/13(四) 早上 11:00至 11/6(日) 晚上 23:59</p>
            </div>
            <div class="time-line ">
                <p class="memo">開賽</p>
                <i class='bx bxs-square red-box'></i>
                <p class="info">UI組、團體組開賽 10/31前端組開賽 11 /7</p>
            </div>
            <div class="time-line">
                <p class="memo">登陸作品</p>
                <i class='bx bxs-square red-box'></i>
                <p class="info">10/31(一) 中午 12:00至11/28(一) 中午 12:00</p>
            </div>
            <div class="time-line">
                <p class="memo">線上直播</p>
                <i class='bx bxs-square red-box'></i>
                <p class="info">11/3 至 11/24(每週四)</p>
            </div>
        </div>
        <div class="time time-2">
            <div class="time-line ">
                <p class="memo">初選</p>
                <i class='bx bxs-square  '></i>
                <p class="info">12/05(五)</p>
            </div>
            <div class="time-line ">
                <p class="memo">決選</p>
                <i class='bx bxs-square '></i>
                <p class="info">12/05(五)</p>
            </div>
        </div>
    </div>
    <div class="directions">
        <p> 初選：將由六角學院前端、UI 評審進行第一波篩選，並於 12/5（五）公布初選佳作名單。</p>
        <p> 決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23（五）公布企業得獎名單。</p>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wrap{
    .scroll-box{
        overflow-x: auto;
        display: flex;
        padding: 30px 0;
        .time{
            display: flex;
            width: 1000px;
            position: relative;
            padding: 20px 0;
            &::before{
                content:"";
                height: 3px;
                width: 72%;
                position: absolute;
                top: 82px;
                left: 0;
                right: 0;
                margin: auto;
                background-color: var(--primary-color);
            }
        }
        .time-2{
            width: 500px;
            &::before{
                width: 50%;
            }
        }
        .time-line{
            scroll-snap-align: start;
            width: 250px;
            text-align: center;
            .bxs-square{
                font-size: 40px;
                color: var(--primary-color);
                transform: rotate(-45deg);
            }
            .red-box{
                color: var(--red-color);
            }
            .memo{
                font-weight: 400;
                font-size: 20px;
                line-height: 43px;
            }
            .info{
                margin: auto;
                width: 50%;
                font-weight: 400;
                font-size: 16px;
                line-height: 35px;
            }
        }
    }
    .directions{
        display: none;
    }

}
@media (min-width: 768px) {
    .wrap{
        .scroll-box{
            display: block;
            .time{
                margin: auto;
                .info{
                    margin: auto;
                    width: 85%;
                    font-size: 20px;
                }
            }
        }
        .directions{
            display: block;
            margin: 20px;
            padding: 20px 100px;
            font-weight: 400;
            font-size: 24px;
            line-height: 40px;
        }
    }
}
</style>
