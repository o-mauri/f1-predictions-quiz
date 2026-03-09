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
        count: 25,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 18,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 12,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 10,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 0,
        priority: 8
    },
    {
        driver: Drivers.maxVerstappen,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 0,
        priority: 7
    },
    {
        driver: Drivers.liamLawson,
        count: 0,
        priority: 3
    },
    {
        driver: Drivers.arvidLindblad,
        count: 4,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 10
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 12
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 9
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
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 1,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 11
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 6
    },
    {
        driver: Drivers.carlosSainz,
        count: 0,
        priority: 5
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
        count: 1,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 0,
        priority: 3
    },
    {
        team: Teams.audi,
        count: 2,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 2
    },
    {
        team: Teams.ferrari,
        count: 27,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 6,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 10,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 43,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 4,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 8,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 0,
        priority: 1
    }
]

///// F1.5 CHAMPIONSHIP /////////////////////////////////////////////////////////////////////////////////////////////////////
export const f15standings: standing[] = [
    {
        driver: Drivers.georgeRussell,
        count: 0,
        priority: 999
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 0,
        priority: 999
    },
    {
        driver: Drivers.lewisHamilton,
        count: 12,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 10,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 0,
        priority: 8
    },
    {
        driver: Drivers.maxVerstappen,
        count: 8,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 0,
        priority: 7
    },
    {
        driver: Drivers.liamLawson,
        count: 0,
        priority: 3
    },
    {
        driver: Drivers.arvidLindblad,
        count: 4,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 0,
        priority: 10
    },
    {
        driver: Drivers.lanceStroll,
        count: 0,
        priority: 12
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 9
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
        count: 6,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 1,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 0,
        priority: 4
    },
    {
        driver: Drivers.valtteriBottas,
        count: 0,
        priority: 11
    },
    {
        driver: Drivers.sergioPerez,
        count: 0,
        priority: 6
    },
    {
        driver: Drivers.carlosSainz,
        count: 0,
        priority: 5
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
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 58,
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
        count: 58,
        priority: 1
    },
    {
        driver: Drivers.isackHadjar,
        count: 10,
        priority: 1
    },
    {
        driver: Drivers.liamLawson,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.arvidLindblad,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.fernandoAlonso,
        count: 21,
        priority: 1
    },
    {
        driver: Drivers.lanceStroll,
        count: 43,
        priority: 1
    },
    {
        driver: Drivers.nicoHulkenberg,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.gabrielBortoleto,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.estebanOcon,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.oliverBearman,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.pierreGasly,
        count: 57,
        priority: 1
    },
    {
        driver: Drivers.francoColapinto,
        count: 56,
        priority: 1
    },
    {
        driver: Drivers.valtteriBottas,
        count: 15,
        priority: 1
    },
    {
        driver: Drivers.sergioPerez,
        count: 55,
        priority: 1
    },
    {
        driver: Drivers.carlosSainz,
        count: 56,
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
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.kimiAntonelli,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.lewisHamilton,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.charlesLeclerc,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.landoNorris,
        count: 0,
        priority: 1
    },
    {
        driver: Drivers.oscarPiastri,
        count: 0,
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
        count: 0,
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
        count: 0,
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