<template>
    <section id="services" class="services">
        <div class="services-inner">
            <div class="services-header">
                <div class="services-heading">
                    <p class="services-eyebrow">
                        Servicios médicos
                    </p>

                    <h2>
                        Atención enfocada en tu
                        <em>salud y recuperación</em>
                    </h2>

                    <p class="services-intro">
                        Atención médica y quirúrgica personalizada, desde la
                        evaluación inicial hasta el seguimiento de tu recuperación.
                    </p>

                </div>

                <svg class="about-hex about-hex-top" viewBox="0 0 100 115" xmlns="http://www.w3.org/2000/svg">
                     <polygon
                        points="50 2.5, 97.5 29.5, 97.5 85.5, 50 112.5, 2.5 85.5, 2.5 29.5"
                        fill="none"
                        stroke="rgba(45, 147, 42, 0.35)"
                        stroke-width="10"
                        stroke-linejoin="round"
                    />
                </svg>

                <div class="services-controls">

                    <button
                        type="button"
                        class="carousel-button"
                        aria-label="Ver servicios anteriores"
                        @click="scrollServices(-1)"
                    >
                        <
                    </button>

                    <button
                        type="button"
                        class="carousel-button"
                        aria-label="Ver más servicios"
                        @click="scrollServices(1)"
                    >
                        >
                    </button>

                </div>

            </div>

            <div class="services-carousel">
                <div
                    ref="servicesTrack"
                    class="services-track"
                    @scroll="handleTrackScroll"
                >

                    <article
                        v-for="(service, index) in loopedServices"
                        :key="`${service.title}-${index}`"
                        class="service-card"
                    >

                        <div class="service-image">

                            <img
                                :src="service.image"
                                :alt="service.title"
                            />

                        </div>

                        <div class="service-content">

                            <h3>
                                {{ service.title }}
                            </h3>

                            <p>
                                {{ service.description }}
                            </p>

                            <!-- <a href="#contacto">
                                Consultar
                                <span aria-hidden="true">→</span>
                            </a> -->

                        </div>

                    </article>

                </div>
            </div>

        </div>

    </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const servicesTrack = ref(null)
const cloneCount = 3
const activeSlide = ref(cloneCount)
let scrollTimeout

const services = [
    {
        title: 'Consulta de cirugía general',
        description:
            'Evaluación médica personalizada para identificar y tratar patologías que pueden requerir manejo quirúrgico.',
        image: '/cirujia.jpg'
    },
    {
        title: 'Evaluación preoperatoria',
        description:
            'Valoración previa a una cirugía para conocer tu estado de salud y preparar el procedimiento de manera adecuada.',
        image: '/cirujia.jpg'
    },
    {
        title: 'Seguimiento postoperatorio',
        description:
            'Control de tu recuperación después de una intervención quirúrgica, con seguimiento cercano y personalizado.',
        image: '/cirujia.jpg'
    },
    {
        title: 'Cirugía ambulatoria',
        description:
            'Procedimientos quirúrgicos seleccionados que permiten una recuperación y alta médica en menor tiempo.',
        image: '/cirujia.jpg'
    },
    {
        title: 'Patologías quirúrgicas frecuentes',
        description:
            'Evaluación y tratamiento de diferentes enfermedades y condiciones que pueden requerir manejo quirúrgico.',
        image: '/cirujia.jpg'
    }
]

const loopedServices = computed(() => [
    ...services.slice(-cloneCount),
    ...services,
    ...services.slice(0, cloneCount)
])

const scrollToSlide = (index, behavior = 'smooth') => {
    const track = servicesTrack.value
    const card = track?.children[index]

    if (!track || !card) return

    if (behavior === 'auto') track.style.scrollBehavior = 'auto'

    track.scrollTo({
        left: card.offsetLeft - track.clientWidth * 0.1,
        behavior
    })

    if (behavior === 'auto') {
        requestAnimationFrame(() => track.style.removeProperty('scroll-behavior'))
    }
}

const scrollServices = (direction) => {
    const nextSlide = activeSlide.value + direction
    activeSlide.value = nextSlide
    scrollToSlide(nextSlide)
}

const handleTrackScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
        const track = servicesTrack.value
        if (!track) return

        const firstCardPosition = track.scrollLeft + track.clientWidth * 0.1
        const closestSlide = [...track.children].reduce((closest, card, index) => {
            const distance = Math.abs(firstCardPosition - card.offsetLeft)

            return distance < closest.distance
                ? { index, distance }
                : closest
        }, { index: 0, distance: Infinity }).index

        if (closestSlide < cloneCount) {
            activeSlide.value = closestSlide + services.length
            scrollToSlide(activeSlide.value, 'auto')
        } else if (closestSlide >= cloneCount + services.length) {
            activeSlide.value = closestSlide - services.length
            scrollToSlide(activeSlide.value, 'auto')
        } else {
            activeSlide.value = closestSlide
        }
    }, 140)
}

onMounted(() => {
    scrollToSlide(cloneCount, 'auto')
})

onBeforeUnmount(() => clearTimeout(scrollTimeout))
</script>

<style scoped>

.services {
    position: relative;
    z-index: 1;
    padding: 10px 64px 20px;
    background: var(--color-white);
    overflow: hidden;
}

.services-inner {
    width: min(var(--container-width), 100%);
    margin: 0 auto;
}

.services-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 42px;
}

.services-heading {
    max-width: 650px;
}

.services-eyebrow {
    margin: 0 0 16px;
    color: var(--color-primary-dark);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.services h2 {
    margin: 0 0 18px;
    color: var(--color-text);
    font-size: clamp(2.6rem, 5vw, 4.4rem);
    line-height: 0.98;
    letter-spacing: -0.045em;
}

.services h2 em {
    color: var(--color-primary-dark);
    font-style: normal;
}

.services-intro {
    max-width: 580px;
    margin: 0;
    color: #748096;
    font-size: 1rem;
    line-height: 1.7;
}

.services-controls {
    display: flex;
    flex-shrink: 0;
    gap: 14px;
}

.carousel-button {
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border: 0;
    border-radius: 50%;
    background: #edf0ef;
    color: #6f777c;
    font-size: 1.7rem;
    cursor: pointer;
    transition:
        background 0.2s ease,
        color 0.2s ease,
        transform 0.2s ease;
}

.carousel-button:hover {
    background: var(--color-primary-dark);
    color: var(--color-white);
    transform: translateY(-2px);
}

.services-carousel {
    position: relative;
}

.services-carousel::before,
.services-carousel::after {
    position: absolute;
    z-index: 1;
    top: 5px;
    bottom: 25px;
    width: 10%;
    content: '';
    pointer-events: none;
}

.services-carousel::before {
    left: 0;
    background: linear-gradient(to right, var(--color-white), transparent);
}

.services-carousel::after {
    right: 0;
    background: linear-gradient(to left, var(--color-white), transparent);
}

.services-track {
    position: relative;
    display: flex;
    gap: 24px;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scroll-padding-inline: 10%;
    scrollbar-width: none;
    padding: 5px 10% 25px;
}

.services-track::-webkit-scrollbar {
    display: none;
}

.service-card {
    flex: 0 0 calc((100% - 48px) / 3);
    min-width: 0;
    overflow: hidden;
    scroll-snap-align: start;
    border-radius: 14px;
    background: var(--color-white);
    box-shadow: 0 15px 35px rgba(38, 54, 83, 0.08);
    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 45px rgba(38, 54, 83, 0.12);
}

.service-image {
    width: 100%;
    height: 190px;
    overflow: hidden;
}

.service-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.service-card:hover .service-image img {
    transform: scale(1.04);
}

.service-content {
    padding: 12px;
}

.service-content h3 {
    margin: 0 0 12px;
    color: var(--color-text);
    font-size: 1.15rem;
    line-height: 1.25;
}

.service-content p {
    min-height: 82px;
    margin: 0px;
    color: #748096;
    font-size: 0.88rem;
    line-height: 1.65;
}

.service-content a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--color-primary-dark);
    font-size: 0.78rem;
    font-weight: 800;
    text-decoration: none;
}

.service-content a span {
    font-size: 1rem;
    transition: transform 0.2s ease;
}

.service-content a:hover span {
    transform: translateX(4px);
}

.about-hex {
    position: absolute;
    z-index: 1005;
}

.about-hex-top {
    top: 20px;
    right: 90px;
    width: 50px;
    height: 50px;
    transform: rotate(12deg);
}

@media (max-width: 900px) {

    .services {
        padding: 90px 32px 100px;
    }

    .services-header {
        align-items: flex-start;
    }

    .service-card {
        flex-basis: calc((100% - 24px) / 2);
    }

}

@media (max-width: 600px) {

    .services {
        padding: 80px 20px 90px;
    }

    .services-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
    }

    .carousel-button {
        width: 50px;
        height: 50px;
        font-size: 1.4rem;
    }

    .service-card {
        flex-basis: 100%;
    }

    .service-image {
        height: 180px;
    }

    .service-content p {
        min-height: auto;
    }
}

</style>