<template>
    <section class="hero" id="home">
        <div class="hero-inner">
            <svg class="about-hex about-hex-top" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
                     <polygon
                        points="50 2.5, 97.5 29.5, 97.5 85.5, 50 112.5, 2.5 85.5, 2.5 29.5"
                        fill="none"
                        stroke="rgba(45, 147, 42, 0.95)"
                        stroke-width="5"
                        stroke-linejoin="round"
                    />
                </svg>
            <div class="hero-copy">
                <p class="eyebrow">Médico Cirujano</p>
                <h1>Dr. Harol Ángel <em>Almaraz Peñafiel</em></h1>
                <p class="hero-text">Atención médica y quirúrgica con un enfoque cercano, profesional y personalizado.</p>
                <div class="hero-actions">
                    <a class="button button-primary" href="#especialidades">Servicios<span aria-hidden="true">→</span></a>
                    <a class="button button-quiet" href="#contacto">Contáctame</a>
                </div>
            </div>
            <div class="hero-visual" aria-label="Equipo médico profesional">
                <svg class="hero-waves" viewBox="0 0 600 480" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <pattern id="wave-lines" width="600" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(-38)">
                            <path d="M0 5 Q37.5 -3 75 5 T150 5 T225 5 T300 5 T375 5 T450 5 T525 5 T600 5" />
                        </pattern>
                        <linearGradient id="wave-fade" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="white" stop-opacity="0" />
                            <stop offset="38%" stop-color="white" stop-opacity="0.25" />
                            <stop offset="50%" stop-color="white" stop-opacity="1" />
                            <stop offset="62%" stop-color="white" stop-opacity="0.25" />
                            <stop offset="100%" stop-color="white" stop-opacity="0" />
                        </linearGradient>
                        <mask id="wave-center-fade">
                            <rect width="100%" height="100%" fill="url(#wave-fade)" />
                        </mask>
                    </defs>
                    <rect width="600" height="480" fill="url(#wave-lines)" mask="url(#wave-center-fade)" />
                </svg>
                <img src="/doctor-foto.png" width="360" alt="foto doctor" style="z-index: 2000;" />
                <!-- <div class="floating-note">Atención<br><strong>humana</strong></div> -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero {
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 80px 64px 20px;
    background: linear-gradient(to bottom, #fff, #f8f9f8);
}

.hero-inner {
    display: grid;
    grid-template-columns: 0.94fr 1.06fr;
    align-items: center;
    width: min(var(--container-width), 100%);
    min-height: 400px;
    margin: 0 auto;
    gap: 50px;
}
.eyebrow {
    margin: 0 0 16px;
    color: var(--color-primary-dark);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    text-transform: uppercase;
}

h1,
h2,
h3,
p {
    margin-top: 0;
}

h1,
h2 {
    color: var(--color-text);
    letter-spacing: -0.045em;
}

h1 {
    max-width: 540px;
    margin-bottom: 24px;
    font-size: clamp(3.2rem, 6vw, 5.7rem);
    line-height: 0.91;
}

h2 {
    margin-bottom: 18px;
    font-size: clamp(2.25rem, 4vw, 4rem);
    line-height: 0.98;
}

em {
    color: var(--color-primary-dark);
    font-style: normal;
}

.hero-text,
.section-heading > p,
.faculty-copy > p {
    color: #748096;
    line-height: 1.7;
}

.hero-text {
    max-width: 450px;
    margin-bottom: 30px;
    font-size: 1.05rem;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.button {
    display: inline-flex;
    gap: 14px;
    align-items: center;
    border-radius: 20px;
    padding: 13px 18px;
    text-decoration: none;
    font-size: 0.86rem;
    font-weight: 700;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
}

.button-primary {
    background: linear-gradient(to right,var(--color-primary),var(--color-primary-dark));
    color: var(--color-white);
}

.button-quiet {
    background-color: var(--color-white);
    border-color: var(--color-background);
    color: var(--color-text);
}

.hero-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 58px;
    color: #8b96a5;
    font-size: 0.75rem;
}

.hero-proof strong {
    display: block;
    margin-bottom: 3px;
    color: var(--color-text);
    font-size: 1.1rem;
}

.hero-visual {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 400px;
    border-radius: 50%;
    background: transparent;
    overflow: hidden;
    isolation: isolate;
}

.hero-waves {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    color: #737d83;
    opacity: 0.35;
    pointer-events: none;
    z-index: 0;
}

.hero-waves path {
    fill: none;
    stroke: currentColor;
    stroke-width: 1.5;
}

.hero-visual img {
    display: block;
    position: relative;
    z-index: 1;
    max-width: 100%;
    height: auto;
}

.floating-note {
    position: absolute;
    right: -4%;
    bottom: 13%;
    z-index: 3;
    padding: 14px 18px;
    border-radius: 9px;
    background: var(--color-white);
    box-shadow: var(--shadow-card);
    color: #7d8992;
    font-size: 0.72rem;
}

.floating-note strong { color: var(--color-primary-dark); font-size: 1rem; }
.section {
    position: relative;
    z-index: 1;
    padding: 112px 0;
}

.about-hex {
    position: absolute;
    z-index: 1005;
}

.about-hex-top {
    top: 80px;
    left: -250px;
    width: 300px;
    height: 300px;
    transform: rotate(-12deg);
}

@media (max-width: 768px) {
    .hero {
        padding: 80px 24px 32px;
    }

    .hero-inner {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    h1 {
        font-size: clamp(2.8rem, 11vw, 4.2rem);
    }

    .hero-visual {
        width: min(100%, 460px);
        min-height: 340px;
        margin: 0 auto;
    }
}

@media (max-width: 480px) {
    .hero {
        padding-right: 20px;
        padding-left: 20px;
    }

    .hero-visual {
        min-height: 280px;
    }
}


</style>