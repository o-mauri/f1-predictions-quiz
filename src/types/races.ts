import { Race } from "./main-types";

export const australia: Race = {
    name: 'Australia',
    flag: 'australia.png',
    order: 1,
    raced: false,
    laps: 58,
    sprint: false,
    sprintLaps: 0,
}

export const china: Race = {
    name: 'China',
    flag: 'china.png',
    order: 2,
    raced: false,
    laps: 56,
    sprint: true,
    sprintLaps: 19,
}

export const japan: Race = {
    name: 'Japan',
    flag: 'japan.png',
    order: 3,
    raced: false,
    laps: 53,
    sprint: false,
    sprintLaps: 0,
}

export const bahrain: Race = {
    name: 'Bahrain',
    flag: 'bahrain.png',
    order: 4,
    raced: false,
    laps: 57,
    sprint: false,
    sprintLaps: 0,
}

export const saudiArabia: Race = {
    name: 'Saudi Arabia',
    flag: 'saudi-arabia.png',
    order: 5,
    raced: false,
    laps: 50,
    sprint: false,
    sprintLaps: 0,
}

export const miami: Race = {
    name: 'Miami',
    flag: 'miami.png',
    order: 6,
    raced: false,
    laps: 57,
    sprint: true,
    sprintLaps: 19,
}

export const canada: Race = {
    name: 'Canada',
    flag: 'canada.png',
    order: 7,
    raced: false,
    laps: 70,
    sprint: true,
    sprintLaps: 23,
}

export const monaco: Race = {
    name: 'Monaco',
    flag: 'monaco.png',
    order: 8,
    raced: false,
    laps: 78,
    sprint: false,
    sprintLaps: 0,
}

export const barcelonaCatalunya: Race = {
    name: 'Barcelona-Catalunya',
    flag: 'barcelona-catalunya.png',
    order: 9,
    raced: false,
    laps: 66,
    sprint: false,
    sprintLaps: 0,
}

export const austria: Race = {
    name: 'Austria',
    flag: 'austria.png',
    order: 10,
    raced: false,
    laps: 71,
    sprint: false,
    sprintLaps: 0,
}

export const greatBritain: Race = {
    name: 'Great Britain',
    flag: 'great-britain.png',
    order: 11,
    raced: false,
    laps: 52,
    sprint: true,
    sprintLaps: 17,
}

export const belgium: Race = {
    name: 'Belgium',
    flag: 'belgium.png',
    order: 12,
    raced: false,
    laps: 44,
    sprint: false,
    sprintLaps: 0,
}

export const hungary: Race = {
    name: 'Hungary',
    flag: 'hungary.png',
    order: 13,
    raced: false,
    laps: 70,
    sprint: false,
    sprintLaps: 0,
}

export const netherlands: Race = {
    name: 'Netherlands',
    flag: 'netherlands.png',
    order: 14,
    raced: false,
    laps: 72,
    sprint: true,
    sprintLaps: 24,
}

export const italy: Race = {
    name: 'Italy',
    flag: 'italy.png',
    order: 15,
    raced: false,
    laps: 53,
    sprint: false,
    sprintLaps: 0,
}

export const madrid: Race = {
    name: 'Spain',
    flag: 'madrid.png',
    order: 16,
    raced: false,
    laps: 57,
    sprint: false,
    sprintLaps: 0,
}

export const azerbaijan: Race = {
    name: 'Azerbaijan',
    flag: 'azerbaijan.png',
    order: 17,
    raced: false,
    laps: 51,
    sprint: false,
    sprintLaps: 0,
}

export const singapore: Race = {
    name: 'Singapore',
    flag: 'singapore.png',
    order: 18,
    raced: false,
    laps: 62,
    sprint: true,
    sprintLaps: 21,
}

export const unitedStates: Race = {
    name: 'United States',
    flag: 'united-states.png',
    order: 19,
    raced: false,
    laps: 56,
    sprint: false,
    sprintLaps: 0,
}

export const mexicoCity: Race = {
    name: 'Mexico City',
    flag: 'mexico-city.png',
    order: 20,
    raced: false,
    laps: 71,
    sprint: false,
    sprintLaps: 0,
}

export const saoPaulo: Race = {
    name: 'Sao Paulo',
    flag: 'sao-paulo.png',
    order: 21,
    raced: false,
    laps: 71,
    sprint: false,
    sprintLaps: 0,
}

export const lasVegas: Race = {
    name: 'Las Vegas',
    flag: 'las-vegas.png',
    order: 22,
    raced: false,
    laps: 50,
    sprint: false,
    sprintLaps: 0,
}

export const qatar: Race = {
    name: 'Qatar',
    flag: 'qatar.png',
    order: 23,
    raced: false,
    laps: 57,
    sprint: false,
    sprintLaps: 0,
}

export const abuDhabi: Race = {
    name: 'Abu Dhabi',
    flag: 'abu-dhabi.png',
    order: 24,
    raced: false,
    laps: 58,
    sprint: false,
    sprintLaps: 0,
}

export const Races = {
    australia,
    china,
    japan,
    bahrain,
    saudiArabia,
    miami,
    canada,
    monaco,
    barcelonaCatalunya,
    austria,
    greatBritain,
    belgium,
    hungary,
    netherlands,
    italy,
    madrid,
    azerbaijan,
    singapore,
    unitedStates,
    mexicoCity,
    saoPaulo,
    lasVegas,
    qatar,
    abuDhabi,
} as const satisfies Record<string, Race>;

export type RaceKey = keyof typeof Races;
