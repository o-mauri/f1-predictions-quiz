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
        count: 238,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 340,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 229,
        priority: 2
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 215,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 201,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 138,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 221,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 97,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 75,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 38,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 7,
        priority: 2
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 2
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 13,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 10,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 7,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 23,
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
        count: 7,
        priority: 3
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
        count: 7,
        priority: 1
    },
    {
        team: Teams.audi,
        count: 23,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 1
    },
    {
        team: Teams.ferrari,
        count: 444,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 30,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 339,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 578,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 100,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 332,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 12,
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
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.isackHadjar,
        count: 0,
        priority: 999999
    },
    {
        driver: Drivers.liamLawson,
        count: 75,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 38,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 7,
        priority: 2
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 2
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 13,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 10,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 7,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 23,
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
        count: 7,
        priority: 3
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
        count: 934,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 1018,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 972,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 953,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 886,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 892,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 856,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 738,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 967,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 946,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 814,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 634,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 855,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 902,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 989,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 855,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 946,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 965,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 662,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 835,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 941,
        priority: 1
    },
    {
        driver: Drivers.alexanderAlbon,
        count: 836,
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
        count: 31,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 27,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 34,
        priority: 2
    },
    {
        driver: Drivers.landoNorris,
        count: 33,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 21,
        priority: 1
    },
    {
        driver: Drivers.maxVerstappen,
        count: 20,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 7,
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
        count: 2,
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
        count: 4,
        priority: 2
    },
    {
        driver: Drivers.pierreGasly,
        count: 2,
        priority: 2
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
