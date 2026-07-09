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
        count: 154,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 179,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 147,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 108,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 97,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 82,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 76,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 52,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 39,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 1,
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
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 3,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 18,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 42,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 18,
        priority: 2
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
        priority: 2
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 5,
        priority: 2
    },
]

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 60,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 1,
        priority: 2
    },
    {
        team: Teams.audi,
        count: 6,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 1
    },
    {
        team: Teams.ferrari,
        count: 255,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 21,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 179,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 333,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 59,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 128,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 11,
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
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.landoNorris,
        count: 97,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 82,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 76,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 52,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 39,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 1,
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
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 3,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 18,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 42,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 18,
        priority: 2
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
        priority: 2
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 5,
        priority: 2
    },
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 520,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 554,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 559,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 541,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 438,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 443,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 464,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 456,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 504,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 486,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 418,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 359,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 394,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 496,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 550,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 465,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 502,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 553,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 325,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 455,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 496,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 421,
        priority: 1
    },
]

///// SPRINT STANDINGS ///////////////////////////////////////////////////////////

export const sprintStandings: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 26,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 21,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 18,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 21,
        priority: 2
    },
    {
        driver: Drivers.landoNorris,
        count: 26,
        priority: 2
    },
    {
        driver: Drivers.oscarPiastri,
        count: 17,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 9,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 3,
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
