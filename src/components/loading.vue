<template>
    <Teleport to="#modal">
        <div class="wrap">
            <div class="group">
                <img class="loading-animation" src="../assets/img/cursor.png" alt="">
                <p>努力加載中…</p>
            </div>
        </div>
    </Teleport>
</template>

<style lang="scss" scoped>
.wrap{
    background:url('../assets/img/bg.png');
    height: 100vh;
    position: fixed;
    z-index: 10;
    width: 100vw;
    left: 0;
    top: 0;

    .group{
        text-align: center;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p{
            font-weight: 5;
            font-size: 23px;
            line-height: 26px;
        }
    }
}
</style>