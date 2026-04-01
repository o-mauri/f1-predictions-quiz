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
        count: 63,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 72,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 41,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 49,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 25,
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
        priority: 5
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 6
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
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 1,
        priority: 2
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 3
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.carlosSainz,
        count: 2,
        priority: 2
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 0,
        priority: 2
    },
]

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 16,
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
        count: 90,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 18,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 46,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 135,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 14,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 16,
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
        count: 41,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 49,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 25,
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
        priority: 5
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 6
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
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 1,
        priority: 2
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 3
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.carlosSainz,
        count: 2,
        priority: 2
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 0,
        priority: 2
    },
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
        {
        driver: Drivers.georgeRussell,
        count: 167,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 167,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 167,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 167,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 111,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 53,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 156,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 119,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 166,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 165,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 105,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 82,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 108,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 110,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 165,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 133,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 166,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 164,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 122,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 163,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 163,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 108,
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