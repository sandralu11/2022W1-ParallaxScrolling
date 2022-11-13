<script setup>

</script>

<template>
<div class="wrap">
    <div class="school-title" id="school-title">
        <img src="../assets/img/Hexschool.png" alt="">
    </div>
    <div class="sub-title">
            <p>年度最強合作</p>
            <p>三大關卡來襲</p>
            <div class="line"></div>
    </div>
    <div data-aos="fade-right"   data-aos-offset="300" data-aos-easing="ease-in-sine">
        <div class="company">
                <p >視差滾動  Parallax Scrolling</p>
                <img src="../assets/img/blockstudio.png" alt="">
        </div>
        <div class="card">
            <div class="image">
                <img src="../assets/img/scroll.png" alt="">
            </div>
            <div>
                <div class="card-title">
                    <p class="noto-font">The F2E 活動網站設計</p>
                </div>
                <div class="card-info">
                    <p>請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。</p>
                </div>
                <div class="card-btn">
                    <button class="line-btn shadow">關卡攻略</button>
                    <button class="red-btn shadow">投稿</button>
                </div>
            </div>
        </div>
    </div>
<div  data-aos="fade-left">
    <div class="company">
            <p>線上簽署  Canvas</p>
            <img src="../assets/img/kdan.png" alt="">
    </div>
    <div class="card">
        <div class="image">
            <img src="../assets/img/canvas.png" alt="">
        </div>
        <div>
            <div class="card-title">
            <p class="noto-font">今晚，我想來點點簽</p>
            </div>
            <div class="card-info">
            <p>每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！</p>
            </div>
            <div class="card-btn">
            <button class="line-btn shadow">關卡攻略</button>
            <button class="red-btn shadow">投稿</button>
            </div>
        </div>
    </div>
</div>

    <div data-aos="fade-right">
        <div class="company">
            <p>Scrum  JS draggable</p>
            <img src="../assets/img/titansoft.png" alt="">
    </div>
    <div class="card">
        <div class="image">
            <img src="../assets/img/scrum.png" alt="">
        </div>
        <div>
            <div class="card-title">
            <p class="noto-font">TScrum 新手村</p>
            </div>
            <div class="card-info">
            <p>設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum。</p>
            </div>
            <div class="card-btn">
            <button class="line-btn shadow">關卡攻略</button>
            <button class="red-btn shadow">投稿</button>
            </div>
        </div>
    </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
.wrap{
    padding: 30px;
    overflow-x: hidden;
}
#school-title {
    scroll-margin:65px;

}
.school-title{
    display: flex;
    img{
        max-width: 600px;
        width: 100%;
        margin: 20px auto;
    }
}
.sub-title{
    margin: auto;
    max-width: 1280px;
    border-bottom:solid 4px var(--primary-color) ;
    width: 100%;
    p{
        text-align: center;
        font-weight: 500;
        font-size: 34px;
        letter-spacing: 1rem;
        line-height: 3rem;
    }
    .line{
        margin: auto;
        max-width: 1280px;
        border-top:solid 4px var(--primary-color) ;
        padding-top:8px ;
    }
}
.company{
    margin: auto;
    max-width: 1280px;
    background-color: var(--primary-color);
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    img{
        max-width: 100%;
        height: 70px;
    }
    p{
        display: none;
    }
}
.card{
    margin: auto;
    max-width: 1280px;
    margin-bottom: 20px;
    border: 10px solid var(--primary-color);
    padding: 10px;
    .image{
        display: none;
    }
    .card-title{
        font-weight: 900;
        font-size: 44px;
        line-height: 63px;
        text-align: center;
    }
    .card-info{
        font-weight: 500;
        font-size: 24px;
        line-height: 35px;
        text-align: center;
    }
    .card-btn{
        margin: 50px auto 10px;
        button{
            margin:0 3px;
            width: 130px;
            font-size: 16px;
        }
        .line-btn{
            border-radius: 50px ;
            border: 2px solid var(--primary-color);
            padding: 7px 30px;
            color: var(--primary-color);
            background-color: #F0E1CA;
        }
    }

}
@media (min-width: 768px) {
    .title{
        img{
            width: 50%;
            margin: 20px auto;
        }
    }
    .company{
        display: flex;
        justify-content: space-between;
        p{
            display: block;
            font-weight: 700;
            font-size: 44px;
            line-height: 64px;
            color: #fff;
        }
        img{
            width: 30%;
        }
    }
    .card{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .image{
            display: block;
            margin: 30px;
        }
        .card-title,.card-info{
            text-align: start;
        }

    }
}

</style>
