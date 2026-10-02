<template>
    <div>
        <HeroSection></HeroSection>
        <div class="wave-divider wave-divider-one" aria-hidden="true">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path
                    d="M0,70 C240,-20 480,-20 720,50 C960,120 1200,120 1440,30 L1440,0 L0,0 Z"
                    fill="#f8f9f8"
                />
            </svg>
        </div>
        <AboutSection></AboutSection>
        <ServicesSection></ServicesSection>
        <div class="wave-divider wave-divider-two" aria-hidden="true">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path
                    d="M0,70 C240,-20 480,-20 720,50 C960,120 1200,120 1440,30 L1440,0 L0,0 Z"
                    fill="#fff"
                />
            </svg>
        </div>
    </div>
</template>

<style scoped>
.wave-divider {
  line-height: 0;
}

.wave-divider-one{
    background: #fff;
}

.wave-divider-two{
    background: #f8f9f8;
}

.wave-divider svg {
  display: block;
  width: 100%;
  height: 50px;
}
</style>

