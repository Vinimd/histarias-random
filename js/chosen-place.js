export default function ChosenPlace(item) {
    if (item === 'terra-media') {
        return {
            local: 'na floresta sombria',
            gentilico: 'habitante da terra media'
        };
    } else if (item === 'pandora') {
        return {
            local: 'na antiga base de comando',
            gentilico: 'residente de pandora'
        };
    } else if (item === 'hyrule') {
        return {
            local: 'no antigo castelo de hylure',
            gentilico: 'hylian'
        };
    } else if (item === 'jundiai') {
        return {
            local: 'no São Camilo',
            gentilico: 'jundiaiense'
        };
    }
}