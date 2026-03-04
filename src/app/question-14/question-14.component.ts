import { Component } from '@angular/core';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { TeamIconComponent } from '../team-icon/team-icon.component';
import { Teams } from '../../types/teams';
import { Drivers } from '../../types/drivers';
import { Driver } from '../../types/main-types';
import { Player } from '../../types/main-types';
import { players } from '../../types/players';

interface Question14Answer {
  player: Player;
  mercedesAnswer: Driver;
  ferrariAnswer: Driver;
  redBullAnswer: Driver;
  mclarenAnswer: Driver;
  alpineAnswer: Driver;
  haasAnswer: Driver;
  racingBullsAnswer: Driver;
  astonMartinAnswer: Driver;
  williamsAnswer: Driver;
  cadillacAnswer: Driver;
  audiAnswer: Driver;
}

interface Question14Result {
  mercedesStat1: string;
  mercedesStat2: string;
  mercedesWinner: Driver | null;
  ferrariStat1: string;
  ferrariStat2: string;
  ferrariWinner: Driver | null;
  redBullStat1: string;
  redBullStat2: string;
  redBullWinner: Driver | null;
  mclarenStat1: string;
  mclarenStat2: string;
  mclarenWinner: Driver | null;
  alpineStat1: string;
  alpineStat2: string;
  alpineWinner: Driver | null;
  haasStat1: string;
  haasStat2: string;
  haasWinner: Driver | null;
  racingBullsStat1: string;
  racingBullsStat2: string;
  racingBullsWinner: Driver | null;
  astonMartinStat1: string;
  astonMartinStat2: string;
  astonMartinWinner: Driver | null;
  williamsStat1: string;
  williamsStat2: string;
  williamsWinner: Driver | null;
  cadillacStat1: string;
  cadillacStat2: string;
  cadillacWinner: Driver | null;
  audiStat1: string;
  audiStat2: string;
  audiWinner: Driver | null;
}

@Component({
  selector: 'app-question-14',
  standalone: true,
  templateUrl: './question-14.component.html',
  styleUrl: './question-14.component.scss',
  imports: [QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent, TeamIconComponent],
})
export class Question14Component {
  readonly Teams = Teams;
  readonly Drivers = Drivers;

  results: Question14Result = {
    mercedesStat1: '0',
    mercedesStat2: '0',
    mercedesWinner: null,
    ferrariStat1: '0',
    ferrariStat2: '0',
    ferrariWinner: null,
    redBullStat1: '0',
    redBullStat2: '0 (100%)',
    redBullWinner: null,
    mclarenStat1: '0',
    mclarenStat2: '0',
    mclarenWinner: null,
    alpineStat1: 'N/A',
    alpineStat2: 'N/A',
    alpineWinner: null,
    haasStat1: '0',
    haasStat2: '0',
    haasWinner: null,
    racingBullsStat1: '0',
    racingBullsStat2: '0',
    racingBullsWinner: null,
    astonMartinStat1: '0',
    astonMartinStat2: '0',
    astonMartinWinner: null,
    williamsStat1: '0',
    williamsStat2: '0',
    williamsWinner: null,
    cadillacStat1: '0',
    cadillacStat2: '0',
    cadillacWinner: null,
    audiStat1: '0',
    audiStat2: '0',
    audiWinner: null,
  };

  answers: Question14Answer[] = [
    {
      player: players.kundan,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.charlesLeclerc,
      redBullAnswer: Drivers.isackHadjar,
      mclarenAnswer: Drivers.oscarPiastri,
      alpineAnswer: Drivers.pierreGasly,
      haasAnswer: Drivers.oliverBearman,
      racingBullsAnswer: Drivers.liamLawson,
      astonMartinAnswer: Drivers.fernandoAlonso,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.valtteriBottas,
      audiAnswer: Drivers.gabrielBortoleto,
    },
    {
      player: players.anna,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.lewisHamilton,
      redBullAnswer: Drivers.isackHadjar,
      mclarenAnswer: Drivers.landoNorris,
      alpineAnswer: Drivers.pierreGasly,
      haasAnswer: Drivers.oliverBearman,
      racingBullsAnswer: Drivers.liamLawson,
      astonMartinAnswer: Drivers.fernandoAlonso,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.valtteriBottas,
      audiAnswer: Drivers.gabrielBortoleto,
    },
    {
      player: players.jazz,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.lewisHamilton,
      redBullAnswer: Drivers.isackHadjar,
      mclarenAnswer: Drivers.landoNorris,
      alpineAnswer: Drivers.francoColapinto,
      haasAnswer: Drivers.oliverBearman,
      racingBullsAnswer: Drivers.liamLawson,
      astonMartinAnswer: Drivers.fernandoAlonso,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.sergioPerez,
      audiAnswer: Drivers.gabrielBortoleto,
    },
    {
      player: players.omar,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.charlesLeclerc,
      redBullAnswer: Drivers.maxVerstappen,
      mclarenAnswer: Drivers.landoNorris,
      alpineAnswer: Drivers.pierreGasly,
      haasAnswer: Drivers.estebanOcon,
      racingBullsAnswer: Drivers.liamLawson,
      astonMartinAnswer: Drivers.fernandoAlonso,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.valtteriBottas,
      audiAnswer: Drivers.nicoHulkenberg,
    },
    {
      player: players.joe,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.lewisHamilton,
      redBullAnswer: Drivers.maxVerstappen,
      mclarenAnswer: Drivers.oscarPiastri,
      alpineAnswer: Drivers.pierreGasly,
      haasAnswer: Drivers.oliverBearman,
      racingBullsAnswer: Drivers.arvidLindblad,
      astonMartinAnswer: Drivers.fernandoAlonso,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.valtteriBottas,
      audiAnswer: Drivers.nicoHulkenberg,
    },
    {
      player: players.michael,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.lewisHamilton,
      redBullAnswer: Drivers.maxVerstappen,
      mclarenAnswer: Drivers.landoNorris,
      alpineAnswer: Drivers.pierreGasly,
      haasAnswer: Drivers.oliverBearman,
      racingBullsAnswer: Drivers.liamLawson,
      astonMartinAnswer: Drivers.lanceStroll,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.valtteriBottas,
      audiAnswer: Drivers.nicoHulkenberg,
    },
    {
      player: players.koli,
      mercedesAnswer: Drivers.georgeRussell,
      ferrariAnswer: Drivers.charlesLeclerc,
      redBullAnswer: Drivers.isackHadjar,
      mclarenAnswer: Drivers.landoNorris,
      alpineAnswer: Drivers.pierreGasly,
      haasAnswer: Drivers.estebanOcon,
      racingBullsAnswer: Drivers.arvidLindblad,
      astonMartinAnswer: Drivers.lanceStroll,
      williamsAnswer: Drivers.carlosSainz,
      cadillacAnswer: Drivers.sergioPerez,
      audiAnswer: Drivers.nicoHulkenberg,
    },
  ];
}
