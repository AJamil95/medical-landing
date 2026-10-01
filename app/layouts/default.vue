<template>
    <div>
        <PageNavbar></PageNavbar>
        <main class="main">
            <slot/>
        </main>
        <PageFooter></PageFooter>
    </div>
</template>

<style scoped>
.main{
    position: relative;
    overflow: hidden;
    background: #fff;
}
</style>