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
    padding-top: 64px;
}
</style>