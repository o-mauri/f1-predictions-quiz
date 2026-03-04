import { Driver } from "./main-types";
import {
    ferrari,
    mercedes,
    redBull,
    mclaren,
    alpine,
    astonMartin,
    racingBulls,
    williams,
    haas,
    cadillac,
    audi,
} from "./teams";

// McLaren
export const landoNorris: Driver = {
    longName: 'Lando Norris',
    shortName: 'Norris',
    initials: 'LN',
    team: mclaren,
    number: 1,
    image: 'norris.jpg',
}

export const oscarPiastri: Driver = {
    longName: 'Oscar Piastri',
    shortName: 'Piastri',
    initials: 'OP',
    team: mclaren,
    number: 81,
    image: 'piastri.jpg',
}

// Ferrari
export const lewisHamilton: Driver = {
    longName: 'Lewis Hamilton',
    shortName: 'Hamilton',
    initials: 'LH',
    team: ferrari,
    number: 44,
    image: 'hamilton.jpg',
}

export const charlesLeclerc: Driver = {
    longName: 'Charles Leclerc',
    shortName: 'Leclerc',
    initials: 'CL',
    team: ferrari,
    number: 16,
    image: 'leclerc.jpg',
}

// Mercedes
export const georgeRussell: Driver = {
    longName: 'George Russell',
    shortName: 'Russell',
    initials: 'GR',
    team: mercedes,
    number: 63,
    image: 'russell.jpg',
}

export const kimiAntonelli: Driver = {
    longName: 'Kimi Antonelli',
    shortName: 'Antonelli',
    initials: 'KA',
    team: mercedes,
    number: 12,
    image: 'antonelli.jpg',
}

// Red Bull Racing
export const maxVerstappen: Driver = {
    longName: 'Max Verstappen',
    shortName: 'Verstappen',
    initials: 'MV',
    team: redBull,
    number: 3,
    image: 'verstappen.jpg',
}

export const isackHadjar: Driver = {
    longName: 'Isack Hadjar',
    shortName: 'Hadjar',
    initials: 'IH',
    team: redBull,
    number: 6,
    image: 'hadjar.jpg',
}

// Aston Martin
export const fernandoAlonso: Driver = {
    longName: 'Fernando Alonso',
    shortName: 'Alonso',
    initials: 'FA',
    team: astonMartin,
    number: 14,
    image: 'alonso.jpg',
}

export const lanceStroll: Driver = {
    longName: 'Lance Stroll',
    shortName: 'Stroll',
    initials: 'LS',
    team: astonMartin,
    number: 18,
    image: 'stroll.jpg',
}

// Racing Bulls
export const liamLawson: Driver = {
    longName: 'Liam Lawson',
    shortName: 'Lawson',
    initials: 'LL',
    team: racingBulls,
    number: 30,
    image: 'lawson.jpg',
}

export const arvidLindblad: Driver = {
    longName: 'Arvid Lindblad',
    shortName: 'Lindblad',
    initials: 'AL',
    team: racingBulls,
    number: 41,
    image: 'lindblad.jpg',
}

// Williams
export const carlosSainz: Driver = {
    longName: 'Carlos Sainz',
    shortName: 'Sainz',
    initials: 'CS',
    team: williams,
    number: 55,
    image: 'sainz.jpg',
}

export const alexanderAlbon: Driver = {
    longName: 'Alexander Albon',
    shortName: 'Albon',
    initials: 'AA',
    team: williams,
    number: 23,
    image: 'albon.jpg',
}

// Haas
export const estebanOcon: Driver = {
    longName: 'Esteban Ocon',
    shortName: 'Ocon',
    initials: 'EO',
    team: haas,
    number: 31,
    image: 'ocon.jpg',
}

export const oliverBearman: Driver = {
    longName: 'Oliver Bearman',
    shortName: 'Bearman',
    initials: 'OB',
    team: haas,
    number: 87,
    image: 'bearman.jpg',
}

// Alpine
export const pierreGasly: Driver = {
    longName: 'Pierre Gasly',
    shortName: 'Gasly',
    initials: 'PG',
    team: alpine,
    number: 10,
    image: 'gasly.jpg',
}

export const francoColapinto: Driver = {
    longName: 'Franco Colapinto',
    shortName: 'Colapinto',
    initials: 'FC',
    team: alpine,
    number: 43,
    image: 'colapinto.png',
}

// Audi
export const nicoHulkenberg: Driver = {
    longName: 'Nico Hulkenberg',
    shortName: 'Hulkenberg',
    initials: 'NH',
    team: audi,
    number: 27,
    image: 'hulkenberg.jpg',
}

export const gabrielBortoleto: Driver = {
    longName: 'Gabriel Bortoleto',
    shortName: 'Bortoleto',
    initials: 'GB',
    team: audi,
    number: 5,
    image: 'bortoleto.jpg',
}

// Cadillac
export const sergioPerez: Driver = {
    longName: 'Sergio Perez',
    shortName: 'Perez',
    initials: 'SP',
    team: cadillac,
    number: 11,
    image: 'perez.jpg',
}

export const valtteriBottas: Driver = {
    longName: 'Valtteri Bottas',
    shortName: 'Bottas',
    initials: 'VB',
    team: cadillac,
    number: 77,
    image: 'bottas.jpg',
}

export const Drivers = {
    landoNorris,
    oscarPiastri,
    lewisHamilton,
    charlesLeclerc,
    georgeRussell,
    kimiAntonelli,
    maxVerstappen,
    isackHadjar,
    fernandoAlonso,
    lanceStroll,
    liamLawson,
    arvidLindblad,
    carlosSainz,
    alexanderAlbon,
    estebanOcon,
    oliverBearman,
    pierreGasly,
    francoColapinto,
    nicoHulkenberg,
    gabrielBortoleto,
    sergioPerez,
    valtteriBottas,
} as const satisfies Record<string, Driver>;

export type DriverKey = keyof typeof Drivers;
