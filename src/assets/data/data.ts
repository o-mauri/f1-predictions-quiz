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
        count: 106,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 156,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 115,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 75,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 73,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 68,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 55,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 34,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 28,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 13,
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
        count: 2,
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
        count: 41,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 16,
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
        count: 5,
        priority: 2
    },
]

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 57,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 1,
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
        count: 190,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 21,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 141,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 262,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 41,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 89,
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
        count: 73,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 68,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 55,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 34,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 28,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 13,
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
        count: 2,
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
        count: 41,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 16,
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
        count: 5,
        priority: 2
    },
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 397,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 431,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 436,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 418,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 315,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 320,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 347,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 333,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 382,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 364,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 299,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 263,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 288,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 374,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 429,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 343,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 380,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 431,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 271,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 399,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 422,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 309,
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
