import  { Drivers } from "../../types/drivers";
import { Driver, Team } from "../../types/main-types";
import { Teams } from "../../types/teams";

export interface standing {
    driver?: Driver;
    team?: Team;
    count: number;
    priority: number;
}


/// DRIVERS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const driversChampionshiop: standing[] = [
    {
        driver: Drivers.georgeRussell,
        count: 88,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 131,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 72,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 75,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 48,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 43,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 14,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 16,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 5,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 5
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 2,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 1,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 18,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 2
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 3
    },
    {
        driver: Drivers.carlosSainz,
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 1,
        priority: 2
    },
]

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 35,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 0,
        priority: 2
    },
    {
        team: Teams.audi,
        count: 2,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 1
    },
    {
        team: Teams.ferrari,
        count: 147,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 19,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 106,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 219,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 21,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 57,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 7,
        priority: 1
    }
]

///// F1.5 CHAMPIONSHIP /////////////////////////////////////////////////////////////////////////////////////////////////////
export const f15standings: standing[] =  [
    {
        driver: Drivers.georgeRussell,
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 0,
        priority: 999999
    },
        {
        driver: Drivers.lewisHamilton,
        count: 72,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 75,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 48,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 43,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 14,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 16,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 5,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 5
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 2,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 1,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 18,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 2
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 3
    },
    {
        driver: Drivers.carlosSainz,
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 1,
        priority: 2
    },
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 253,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 292,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 292,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 292,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 206,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 176,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 281,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 190,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 239,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 221,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 184,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 202,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 181,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 232,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 287,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 256,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 237,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 288,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 241,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 258,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 288,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 176,
        priority: 1
    },
]

///// SPRINT STANDINGS ///////////////////////////////////////////////////////////

export const sprintStandings: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 21,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 13,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 11,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 17,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 2,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 1,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 1,
        priority: 2
    },
    {
        driver: Drivers.pierreGasly,
        count: 1,
        priority: 3
    },
    {
        driver: Drivers.francoColapinto,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 0,
        priority: 1
    },
]
