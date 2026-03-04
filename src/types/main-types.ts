export interface Team {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    logo: string;
}

export interface Driver {
    longName: string;
    shortName: string;
    initials: string;
    team: Team;
    number: number;
    image: string;
}

export interface Race {
    name: string;
    flag: string;
    order: number;
    raced: boolean;
    laps: number;
    sprint: boolean;
    sprintLaps: number;
}

export interface Player {
    name: string;
    initials: string;
    color: string;
    image: string;
}