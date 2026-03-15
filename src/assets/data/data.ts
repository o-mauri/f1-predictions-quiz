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
        count: 51,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 47,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 33,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 34,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 3,
        priority: 8
    },
    {
        driver: Drivers.maxVerstappen,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 4,
        priority: 2
    },
    {
        driver: Drivers.liamLawson,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 4,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 6
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 7
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 2
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 2,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 17,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 9,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 1,
        priority: 4
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 5
    },
    {
        driver: Drivers.carlosSainz,
        count: 2,
        priority: 5
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 0,
        priority: 3
    },
]

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 10,
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
        count: 67,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 17,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 18,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 98,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 12,
        priority: 2
    },
    {
        team: Teams.redBull,
        count: 12,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 2,
        priority: 2
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
        count: 33,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 34,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 3,
        priority: 8
    },
    {
        driver: Drivers.maxVerstappen,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 4,
        priority: 2
    },
    {
        driver: Drivers.liamLawson,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 4,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 6
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 7
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 2
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 2,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 17,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 9,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 1,
        priority: 4
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 5
    },
    {
        driver: Drivers.carlosSainz,
        count: 2,
        priority: 5
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 0,
        priority: 3
    },
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 114,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 114,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 114,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 114,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 103,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 66,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 113,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 112,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 53,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 52,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 55,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 112,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 113,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 113,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 111,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 70,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 110,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 111,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 57,
        priority: 1
    },
]

///// SPRINT STANDINGS ///////////////////////////////////////////////////////////

export const sprintStandings: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 4,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 7,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 5,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 3,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 0,
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
        count: 0,
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
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 0,
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