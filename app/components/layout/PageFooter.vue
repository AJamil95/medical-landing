<template>
    <footer id="contact" class="site-footer">
        <div class="footer-content">
            <div class="footer-main">
                <div class="footer-brand">
                    <img src="/medical-logo.png" alt="logo" />
                </div>

                <nav class="footer-nav" aria-label="Navegación del pie de página">
                    <a href="#home">Inicio</a>
                    <a href="#about">Sobre mí</a>
                    <a href="#services">Servicios</a>
                    <a href="#services">¿Cuándo consultar?</a>
                </nav>

                <a
                    class="footer-whatsapp"
                    href="https://wa.me/5915555555555?text=Hola%2C%20quisiera%20solicitar%20informaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contactar por WhatsApp, número provisional"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.4ZM12.1 21.7a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.5 4.5-10 10-10 2.7 0 5.2 1 7.1 2.9a9.9 9.9 0 0 1 2.9 7.1c0 5.5-4.5 10-9.9 10Zm5.5-7.5c-.3-.2-1.7-.9-2-.9s-.5-.2-.7.2c-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.6-.5Z" />
                    </svg>
                    <span>Contacto</span>
                </a>
            </div>

            <div class="footer-credits">
                <p class="footer-copyright footer-developer">
                    © {{ new Date().getFullYear() }} <a href="https://ajamil95.github.io/portfolio-landing/" target="_blank" rel="noopener noreferrer">AJamil95.dev.</a> Todos los derechos reservados
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.site-footer {
    overflow: hidden;
    color: var(--color-white);
    background: linear-gradient(to top,var(--color-primary),var(--color-primary-dark));
}

.footer-content {
    margin-top: -1px;
    padding: 28px max(32px, calc((100% - var(--container-width)) / 2)) 20px;
    border-radius: 0 0 20px 20px;
    background: linear-gradient(110deg, #7bd677, var(--footer-green));
}

.footer-main {
    display: flex;
    align-items: center;
    gap: 38px;
    min-height: 66px;
}

.footer-brand {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
}

.footer-brand img {
    display: block;
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: brightness(0) invert(1);
}

.footer-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 28px;
}

.footer-nav a {
    color: var(--color-white);
    font-size: 0.84rem;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s ease;
}

.footer-nav a:hover,
.footer-nav a:focus-visible {
    opacity: 0.75;
}

.footer-whatsapp {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    margin-left: auto;
    padding: 10px 16px;
    border: 1px solid rgba(255, 255, 255, 0.7);
    border-radius: 999px;
    color: var(--color-white);
    font-size: 0.84rem;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
}

.footer-whatsapp:hover,
.footer-whatsapp:focus-visible {
    background: var(--color-white);
    color: var(--footer-green);
}

.footer-whatsapp svg {
    width: 19px;
    height: 19px;
    fill: currentColor;
}

.footer-credits {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px 20px;
    margin-top: 22px;
}

.footer-copyright {
    margin: 0;
    color: rgba(37, 105, 41, 0.72);
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-align: center;
}

.footer-developer {
    margin: 0;
    color: rgba(37, 105, 41, 0.72);
    font-size: 0.68rem;
}

.footer-developer a {
    color: inherit;
    font-weight: 700;
    text-decoration: none;
}

.footer-developer a:hover,
.footer-developer a:focus-visible {
    text-decoration: underline;
}

@media (max-width: 700px) {
    .footer-content {
        padding: 22px 20px 18px;
        border-radius: 0 0 16px 16px;
    }

    .footer-main {
        flex-direction: column;
        gap: 20px;
    }

    .footer-nav {
        justify-content: center;
        gap: 12px 20px;
    }

    .footer-whatsapp {
        margin-left: 0;
    }

    .footer-credits {
        flex-direction: column;
        margin-top: 22px;
    }

    .footer-copyright {
        font-size: 0.62rem;
        line-height: 1.5;
    }

    .footer-developer {
        font-size: 0.62rem;
    }
}
</style>