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
        count: 80,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 100,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 51,
        priority: 2
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 59,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 51,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 43,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 26,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 4,
        priority: 2
    },
    {
        driver: Drivers.liamLawson,
        count: 10,
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
        count: 17,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 16,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 7,
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
        count: 4,
        priority: 3
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
        count: 23,
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
        count: 110,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 18,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 94,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 180,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 14,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 30,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 5,
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
        count: 51,
        priority: 2
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 59,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 51,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 43,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 26,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 4,
        priority: 2
    },
    {
        driver: Drivers.liamLawson,
        count: 10,
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
        count: 17,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 16,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 7,
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
        count: 4,
        priority: 3
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
        count: 224,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 224,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 224,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 224,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 168,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 110,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 213,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 123,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 172,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 221,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 161,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 138,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 115,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 166,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 221,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 189,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 170,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 221,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 177,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 219,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 221,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 165,
        priority: 1
    },
]

///// SPRINT STANDINGS ///////////////////////////////////////////////////////////

export const sprintStandings: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 13,
        priority: 2
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 7,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 13,
        priority: 3
    },
    {
        driver: Drivers.landoNorris,
        count: 13,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 10,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 4,
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
        priority: 2
    },
    {
        driver: Drivers.pierreGasly,
        count: 1,
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
