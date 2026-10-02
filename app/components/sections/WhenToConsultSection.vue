<template>
    <section id="when-to-consult" class="consult-section">
        <div class="consult-inner">
            <header class="consult-header">
                <p class="consult-eyebrow">Orientación para tu salud</p>
                <h2>¿Cuándo <em>consultar?</em></h2>
                <p class="consult-intro">
                    Una valoración con cirugía general puede ayudarte a conocer tus opciones.
                    Toca o enfoca una tarjeta para ver más información.
                </p>
            </header>

            <div class="consult-grid">
                <article
                    v-for="(item, index) in consultReasons"
                    :key="item.title"
                    class="consult-card"
                    :class="{ 'is-flipped': flippedCards.has(index) }"
                >
                    <button
                        type="button"
                        class="consult-card-button"
                        :aria-label="`${item.title}. ${flippedCards.has(index) ? 'Mostrar título' : 'Ver información'}`"
                        :aria-pressed="flippedCards.has(index)"
                        @click="toggleCard(index)"
                    >
                        <span class="consult-card-inner">
                            <span class="consult-card-face consult-card-front">
                                <svg
                                    class="consult-icon"
                                    viewBox="0 0 64 64"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true"
                                >
                                    <template v-if="item.icon === 'abdomen'">
                                        <path d="M23 9c-2 7-6 10-6 19v17c0 6 7 10 15 10s15-4 15-10V28c0-9-4-12-6-19" />
                                        <path d="M24 26c3-3 13-3 16 0M25 37c4 3 10 3 14 0" />
                                        <circle cx="32" cy="32" r="3" />
                                    </template>
                                    <template v-else-if="item.icon === 'hernia'">
                                        <path d="M15 10h34v44H15zM25 10V6h14v4" />
                                        <path d="M23 23h18M23 31h9M23 39h7" />
                                        <circle cx="40" cy="38" r="7" />
                                        <path d="m45 43 6 6" />
                                    </template>
                                    <template v-else-if="item.icon === 'gallbladder'">
                                        <path d="M34 10c-2 8-1 11 5 15 7 5 8 13 4 21-3 6-12 9-18 4-7-6-6-17 0-23 4-4 7-8 9-17Z" />
                                        <path d="M34 10c-3 5-7 7-12 7M34 10c3 4 7 5 12 5" />
                                    </template>
                                    <template v-else-if="item.icon === 'mass'">
                                        <path d="M11 49h42M17 49V31l15-17 15 17v18" />
                                        <path d="M26 49V37h12v12" />
                                        <circle cx="46" cy="20" r="7" />
                                        <path d="M46 16v8M42 20h8" />
                                    </template>
                                    <template v-else>
                                        <path d="M18 8h28v48H18zM25 19h14M25 28h14M25 37h9" />
                                        <path d="m39 47 11-11 5 5-11 11-7 2z" />
                                    </template>
                                </svg>
                                <span class="consult-card-title">{{ item.title }}</span>
                            </span>

                            <span class="consult-card-face consult-card-back">
                                <span class="consult-card-back-title">{{ item.title }}</span>
                                <span class="consult-card-description">{{ item.description }}</span>
                            </span>
                        </span>
                    </button>
                </article>
            </div>

            <p class="consult-note">
                Esta información es orientativa y no sustituye una consulta médica.
                Ante síntomas intensos o una emergencia, acude a un servicio de urgencias.
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const flippedCards = ref(new Set())

const consultReasons = [
    {
        title: 'Dolor abdominal persistente',
        icon: 'abdomen',
        description:
            'Si el dolor no cede o vuelve con frecuencia, una valoración médica ayuda a identificar su causa y definir los siguientes pasos.'
    },
    {
        title: 'Hernias',
        icon: 'hernia',
        description:
            'Bultos o molestias en el abdomen o la ingle pueden requerir evaluación para conocer las opciones de tratamiento.'
    },
    {
        title: 'Problemas de vesícula',
        icon: 'gallbladder',
        description:
            'Si presentas molestias que podrían relacionarse con la vesícula, consulta para recibir una evaluación y orientación individual.'
    },
    {
        title: 'Lesiones o masas',
        icon: 'mass',
        description:
            'Un bulto, lesión o masa nueva, o que haya cambiado, merece una valoración para determinar qué pasos seguir.'
    },
    {
        title: 'Valoración quirúrgica',
        icon: 'evaluation',
        description:
            'Si te recomendaron una cirugía o necesitas una valoración, puedes conversar sobre el procedimiento y su preparación.'
    }
]

const toggleCard = (index) => {
    const nextFlippedCards = new Set(flippedCards.value)

    if (nextFlippedCards.has(index)) {
        nextFlippedCards.delete(index)
    } else {
        nextFlippedCards.add(index)
    }

    flippedCards.value = nextFlippedCards
}
</script>

<style scoped>
.consult-section {
    position: relative;
    overflow: hidden;
    padding: 32px 48px 36px;
    background: #f8f9f8;
}


.consult-inner {
    position: relative;
    z-index: 1;
    width: min(var(--container-width), 100%);
    margin: 0 auto;
}

.consult-header {
    max-width: 760px;
    margin: 0 auto 28px;
    text-align: center;
}

.consult-eyebrow {
    margin: 0 0 14px;
    color: var(--color-primary-dark);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.consult-header h2 {
    margin: 0 0 18px;
    color: var(--color-text);
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1;
    letter-spacing: -0.045em;
}

.consult-header h2 em {
    color: var(--color-primary-dark);
    font-style: normal;
}

.consult-intro {
    max-width: 620px;
    margin: 0 auto;
    color: #748096;
    font-size: 1rem;
    line-height: 1.7;
}

.consult-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 14px;
}

.consult-card {
    min-width: 0;
    min-height: 235px;
    perspective: 1200px;
}

.consult-card-button {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 235px;
    min-width: 0;
    padding: 0;
    border: 0;
    border-radius: 14px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    text-align: left;
    -webkit-tap-highlight-color: transparent;
}

.consult-card-button:focus-visible {
    outline: 3px solid var(--color-primary-dark);
    outline-offset: 5px;
}

.consult-card-inner {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    min-height: 235px;
    border-radius: inherit;
    transform-style: preserve-3d;
    transition: transform 0.65s cubic-bezier(0.2, 0.75, 0.25, 1);
}

.is-flipped .consult-card-inner {
    transform: rotateY(180deg);
}

.consult-card-face {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 18px;
    overflow: hidden;
    border: 1px solid rgba(58, 63, 92, 0.06);
    border-radius: 14px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    box-shadow: 0 15px 35px rgba(38, 54, 83, 0.09);
}

.consult-card-front {
    background: var(--color-white);
}

.consult-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 16px;
    color: var(--color-text);
}

.consult-card-title {
    display: block;
    width: 100%;
    color: var(--color-text);
    font-size: clamp(1rem, 1.35vw, 1.2rem);
    font-weight: 700;
    line-height: 1.22;
}

.consult-card-back {
    color: var(--color-white);
    background: linear-gradient(135deg, #86dc88 0%, #4ebc4b 100%);
    transform: rotateY(180deg);
}

.consult-card-back-title {
    margin-bottom: 16px;
    font-size: 1.08rem;
    font-weight: 700;
    line-height: 1.3;
}

.consult-card-description {
    font-size: 0.84rem;
    line-height: 1.45;
}


.consult-note {
    max-width: 780px;
    margin: 20px auto 0;
    color: #748096;
    font-size: 0.82rem;
    line-height: 1.6;
    text-align: center;
}

@media (max-width: 1050px) {
    .consult-section {
        padding: 64px 32px;
    }

    .consult-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }
}

@media (max-width: 600px) {
    .consult-section {
        padding: 48px 18px;
    }

    .consult-header {
        margin-bottom: 24px;
        text-align: left;
    }

    .consult-header h2 {
        font-size: clamp(2.4rem, 11vw, 3.4rem);
    }

    .consult-grid {
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;
    }

    .consult-card,
    .consult-card-button,
    .consult-card-inner {
        width: 100%;
        min-width: 0;
        min-height: 225px;
    }

    .consult-card-face {
        padding: 20px;
    }

    .consult-card-title,
    .consult-card-back-title,
    .consult-card-description {
        overflow-wrap: anywhere;
    }
}

@media (prefers-reduced-motion: reduce) {
    .consult-card-inner {
        transition-duration: 0.01ms;
    }
}
</style>
