import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { CommonModule } from '@angular/common';

interface Question6Answer {
  player: Player;
  drivers: Driver[];
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-6',
  standalone: true,
  templateUrl: './question-6.component.html',
  styleUrl: './question-6.component.scss',
  imports: [CommonModule, QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
})
export class Question6Component {
  allDrivers: Driver[] = Object.values(Drivers);
  removeDrivers: Driver[] = [Drivers.francoColapinto, Drivers.liamLawson, Drivers.lanceStroll];

  get displayedDrivers(): Driver[] {
    return this.allDrivers.filter((d) => !this.removeDrivers.includes(d));
  }

  podiumDrivers: Driver[] = [];

  readonly answers: Question6Answer[] = [
    {
      player: players.kundan,
      drivers: [
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.oliverBearman,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.maxVerstappen,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-27',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      drivers: [
        Drivers.fernandoAlonso,
        Drivers.carlosSainz,
        Drivers.alexanderAlbon,
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.oliverBearman,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.maxVerstappen,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-36',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      drivers: [
        Drivers.fernandoAlonso,
        Drivers.nicoHulkenberg,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.maxVerstappen,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-36',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.omar,
      drivers: [
        Drivers.alexanderAlbon,
        Drivers.nicoHulkenberg,
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.oliverBearman,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.maxVerstappen,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-33',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      drivers: [
        Drivers.carlosSainz,
        Drivers.alexanderAlbon,
        Drivers.valtteriBottas,
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.maxVerstappen,
      ],
      provisionalPoints: '-30',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      drivers: [
        Drivers.carlosSainz,
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.maxVerstappen,
      ],
      provisionalPoints: '-24',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      drivers: [
        Drivers.pierreGasly,
        Drivers.carlosSainz,
        Drivers.alexanderAlbon,
        Drivers.nicoHulkenberg,
        Drivers.sergioPerez,
        Drivers.charlesLeclerc,
        Drivers.lewisHamilton,
        Drivers.landoNorris,
        Drivers.oscarPiastri,
        Drivers.georgeRussell,
        Drivers.kimiAntonelli,
        Drivers.arvidLindblad,
        Drivers.maxVerstappen,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-42',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
