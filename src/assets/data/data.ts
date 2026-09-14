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
        count: 211,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 292,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 191,
        priority: 2
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 167,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 186,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 120,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 145,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 71,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 59,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 31,
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
        priority: 2
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 7,
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
        count: 41,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 27,
        priority: 1
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
        count: 68,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 3,
        priority: 1
    },
    {
        team: Teams.audi,
        count: 17,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 1
    },
    {
        team: Teams.ferrari,
        count: 358,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 21,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 306,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 503,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 77,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 230,
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
        count: 145,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 71,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 59,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 31,
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
        priority: 2
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 7,
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
        count: 41,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 27,
        priority: 1
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
        count: 772,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 850,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 804,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 785,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 734,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 724,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 688,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 570,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 799,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 779,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 678,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 536,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 687,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 789,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 822,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 688,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 795,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 845,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 547,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 669,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 774,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 707,
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
