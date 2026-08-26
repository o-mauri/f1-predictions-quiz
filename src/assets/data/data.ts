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
        count: 183,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 242,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 183,
        priority: 2
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 155,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 159,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 104,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 112,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 68,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 49,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 23,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 3,
        priority: 2
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 5
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 10,
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
        count: 44,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 19,
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
        priority: 2
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 5,
        priority: 1
    },
]

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 63,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 3,
        priority: 1
    },
    {
        team: Teams.audi,
        count: 16,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 1
    },
    {
        team: Teams.ferrari,
        count: 338,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 21,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 263,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 425,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 66,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 186,
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
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.oscarPiastri,
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.maxVerstappen,
        count: 112,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 68,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 49,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 23,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 3,
        priority: 2
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 5
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 10,
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
        count: 44,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 19,
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
        priority: 2
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 5,
        priority: 1
    },
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 662,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 740,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 745,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 727,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 624,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 614,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 578,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 570,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 689,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 670,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 600,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 498,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 578,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 680,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 714,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 579,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 686,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 735,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 442,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 586,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 678,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 599,
        priority: 1
    },
]

///// SPRINT STANDINGS ///////////////////////////////////////////////////////////

export const sprintStandings: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 34,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 26,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 28,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 32,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 21,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 12,
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
        count: 2,
        priority: 1
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
