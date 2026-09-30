import type { NavigationItem } from "~/types/navigationItem";

export const menuNavBar: NavigationItem[] = [
    {
        key: 'home',
        target: 'home',
        label: "Inicio"
    }, 
    {
        key: 'about',
        target: 'about',
        label: "Sobre mí"
    },
    {
        key: 'services',
        target: 'services',
        label: "Servicios"

    },    
    {
        key: 'whenToConsult',
        target: 'when-to-consult',
        label: "¿Cuándo consultar?"
    },
    {
        key: 'contact',
        target: 'contact',
        label: "Contacto"
    },
]