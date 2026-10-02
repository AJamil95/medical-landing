<template>
    <section id="sobre-mi" class="about">
        <div class="about-inner">
             <div class="about-visual">
                <svg class="about-hex about-hex-top" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
                     <polygon
                        points="50 2.5, 97.5 29.5, 97.5 85.5, 50 112.5, 2.5 85.5, 2.5 29.5"
                        fill="none"
                        stroke="rgba(45, 147, 42, 0.8)"
                        stroke-width="5"
                        stroke-linejoin="round"
                    />
                </svg>
                <div class="about-photo">
                    <img
                        src="/cirujia.jpg"
                        alt="Dr. Harol Ángel Almaraz Peñafiel"
                    />
                </div>

            </div>
            <div class="about-copy">
                <svg class="about-hex about-hex-top-right" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
                     <polygon
                        points="50 2.5, 97.5 29.5, 97.5 85.5, 50 112.5, 2.5 85.5, 2.5 29.5"
                        fill="none"
                        stroke="rgba(45, 147, 42, 0.2)"
                        stroke-width="5"
                        stroke-linejoin="round"
                    />
                </svg>
                <p class="about-eyebrow">Sobre mí</p>
                <h2>
                    Comprometido con tu
                    <em>salud y bienestar</em>
                </h2>

                <p class="about-text">
                    Soy el Dr. Harol Ángel Almaraz Peñafiel, médico cirujano
                    general, con una sólida formación académica y una vocación
                    profunda por el servicio a las personas.
                </p>

                <p class="about-text">
                    Creo en una medicina cercana, honesta y basada en la
                    evidencia, donde cada paciente recibe una atención
                    personalizada y humana.
                </p>

                <div class="about-values">

                    <div class="about-value">
                        <div class="value-icon">
                            🎓
                        </div>

                        <span>
                            Formación
                            <strong>especializada</strong>
                        </span>
                    </div>

                    <div class="value-divider"></div>

                    <div class="about-value">
                        <div class="value-icon">
                            ♡
                        </div>

                        <span>
                            Ética
                            <strong>profesional</strong>
                        </span>
                    </div>

                    <div class="value-divider"></div>

                    <div class="about-value">
                        <div class="value-icon">
                            ✦
                        </div>

                        <span>
                            Atención
                            <strong>personalizada</strong>
                        </span>
                    </div>

                </div>
                <svg class="about-hex about-hex-bottom" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
                     <polygon
                        points="50 2.5, 97.5 29.5, 97.5 85.5, 50 112.5, 2.5 85.5, 2.5 29.5"
                        fill="none"
                        stroke="rgba(45, 147, 42, 0.35)"
                        stroke-width="5"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            

        </div>
    </section>
</template>


<style scoped>
.about {
    position: relative;
    z-index: 1;
    padding: 20px 64px 120px;
    background: var(--color-white);
    overflow: hidden;
}


.about-inner {
    position: relative;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 70px;
    width: min(var(--container-width), 100%);
    margin: 0 auto;
    z-index: 2;
}


.about-copy {
    position: relative;
    z-index: 3;
}

.about-eyebrow {
    margin: 0 0 18px;
    color: var(--color-primary-dark);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.about h2 {
    max-width: 650px;
    margin: 0 0 18px;
    color: var(--color-text);
    font-size: clamp(2.7rem, 5vw, 4.5rem);
    line-height: 0.98;
    letter-spacing: -0.045em;
}

.about h2 em {
    display: block;
    color: var(--color-primary-dark);
}


.about-text {
    max-width: 590px;
    margin: 0 0 20px;
    color: #748096;
    font-size: 1rem;
    line-height: 1.75;
}

.about-values {
    display: flex;
    align-items: stretch;
    margin-top: 42px;
    gap: 25px;
}


.about-value {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    min-width: 120px;
}


.value-icon {
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #edf7f0;
    color: var(--color-primary-dark);
    font-size: 1.25rem;
}

.about-value span {
    color: var(--color-text);
    font-size: 0.85rem;
    line-height: 1.35;
}



.about-value strong {
    display: block;
    font-weight: 700;
}

.value-divider {
    width: 1px;
    background: #dce5e1;
}

.about-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 550px;
}


.about-photo {
    position: relative;
    width: min(100%, 470px);
    height: 560px;
    overflow: hidden;
    border-radius: 14px;
    z-index: 2;
    box-shadow: 0 25px 60px rgba(38, 54, 83, 0.12);
}


.about-photo img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.about-hex {
    position: absolute;
    z-index: 1005;
}

.about-hex-top {
    top: 20px;
    left: -160px;
    width: 200px;
    height: 200px;
    transform: rotate(-12deg);
}

.about-hex-top-right
{
    top: -20px;
    right: -100px;
    width: 100px;
    height: 100px;
    transform: rotate(-10deg);
}

.about-hex-bottom {
    right: 40px;
    bottom: -120px;
    width: 100px;
    height: 100px;
    opacity: 0.8;
    transform: rotate(-4deg);

}



@media (max-width: 900px) {

    .about {
        padding: 90px 32px 130px;
    }

    .about-inner {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .about-copy {
        text-align: center;
    }

    .about-text {
        margin-right: auto;
        margin-left: auto;
    }

    .about-values {
        justify-content: center;
    }

    .about-visual {
        width: min(100%, 520px);
        margin: 0 auto;
    }

}


@media (max-width: 600px) {

    .about {
        padding: 80px 20px 120px;
    }

    .about h2 {
        font-size: clamp(2.4rem, 11vw, 3.5rem);
    }

    .about-values {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
    }

    .about-value {
        align-items: center;
        text-align: center;
        min-width: 0;
    }

    .value-divider {
        display: none;
    }

    .about-value span {
        font-size: 0.75rem;
    }

    .about-visual {
        min-height: 400px;
    }

    .about-photo {
        width: 100%;
        height: 430px;
    }

    .about-card {
        left: 10px;
        bottom: 25px;
        width: calc(100% - 20px);
    }

    .about-hex-top {
        right: -45px;
    }

}

@media (max-width: 400px) {

    .about-values {
        grid-template-columns: 1fr;
    }

    .about-value {
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
    }

    .about-photo {
        height: 380px;
    }

}

</style>