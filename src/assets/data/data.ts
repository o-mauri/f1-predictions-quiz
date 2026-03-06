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

/// CONSTRUCTORS STANDINGS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const constructorsStandings: standing[] = [
    {
        team: Teams.alpine,
        count: 0,
        priority: 1
    },
    {
        team: Teams.astonMartin,
        count: 0,
        priority: 1
    },
    {
        team: Teams.audi,
        count: 0,
        priority: 1
    },
    {
        team: Teams.cadillac,
        count: 0,
        priority: 1
    },
    {
        team: Teams.ferrari,
        count: 0,
        priority: 1
    },
    {
        team: Teams.haas,
        count: 0,
        priority: 1
    },
    {
        team: Teams.mclaren,
        count: 0,
        priority: 1
    },
    {
        team: Teams.mercedes,
        count: 0,
        priority: 1
    },
    {
        team: Teams.racingBulls,
        count: 0,
        priority: 1
    },
    {
        team: Teams.redBull,
        count: 0,
        priority: 1
    },
    {
        team: Teams.williams,
        count: 0,
        priority: 1
    }
]

//// LAP COUNT /////////////////////////////////////////////////////////////////////////

export const lapCount: standing[] = [
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