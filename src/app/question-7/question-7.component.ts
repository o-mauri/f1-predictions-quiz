import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { CommonModule } from '@angular/common';

interface Question7Answer {
  player: Player;
  drivers: Driver[];
  provisionalPoints: string;
  confirmedNegativePoints: string;
  confirmedPoints: string;
}

@Component({
  selector: 'app-question-7',
  standalone: true,
  templateUrl: './question-7.component.html',
  styleUrl: './question-7.component.scss',
  imports: [CommonModule, QuestionTitleComponent, PlayerIconComponent, DriverPhotoComponent],
})
export class Question7Component {
  allDrivers: Driver[] = Object.values(Drivers);
  removeDrivers: Driver[] = [];

  get displayedDrivers(): Driver[] {
    return this.allDrivers.filter((d) => !this.removeDrivers.includes(d));
  }

  podiumDrivers: Driver[] = [];

  readonly answers: Question7Answer[] = [
    {
      player: players.kundan,
      drivers: [
        Drivers.pierreGasly,
        Drivers.francoColapinto,
        Drivers.fernandoAlonso,
        Drivers.lanceStroll,
        Drivers.carlosSainz,
        Drivers.alexanderAlbon,
        Drivers.nicoHulkenberg,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.estebanOcon,
        Drivers.oliverBearman,
        Drivers.liamLawson,
        Drivers.arvidLindblad,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-42',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.anna,
      drivers: [
        Drivers.francoColapinto,
        Drivers.pierreGasly,
        Drivers.lanceStroll,
        Drivers.alexanderAlbon,
        Drivers.nicoHulkenberg,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.valtteriBottas,
        Drivers.estebanOcon,
        Drivers.liamLawson,
        Drivers.arvidLindblad,
      ],
      provisionalPoints: '-33',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.jazz,
      drivers: [
        Drivers.pierreGasly,
        Drivers.francoColapinto,
        Drivers.carlosSainz,
        Drivers.alexanderAlbon,
        Drivers.nicoHulkenberg,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.valtteriBottas,
        Drivers.estebanOcon,
        Drivers.oliverBearman,
        Drivers.liamLawson,
        Drivers.arvidLindblad,
      ],
      provisionalPoints: '-36',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.omar,
      drivers: [
        Drivers.pierreGasly,
        Drivers.francoColapinto,
        Drivers.lanceStroll,
        Drivers.fernandoAlonso,
        Drivers.lanceStroll,
        Drivers.alexanderAlbon,
        Drivers.carlosSainz,
        Drivers.nicoHulkenberg,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.valtteriBottas,
        Drivers.estebanOcon,
        Drivers.oliverBearman,
        Drivers.oscarPiastri,
        Drivers.kimiAntonelli,
        Drivers.liamLawson,
        Drivers.arvidLindblad,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-54',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.joe,
      drivers: [
        Drivers.pierreGasly,
        Drivers.francoColapinto,
        Drivers.fernandoAlonso,
        Drivers.lanceStroll,
        Drivers.carlosSainz,
        Drivers.alexanderAlbon,
        Drivers.nicoHulkenberg,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.valtteriBottas,
        Drivers.lewisHamilton,
        Drivers.estebanOcon,
        Drivers.liamLawson,
        Drivers.arvidLindblad,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-45',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.michael,
      drivers: [
        Drivers.pierreGasly,
        Drivers.francoColapinto,
        Drivers.lanceStroll,
        Drivers.gabrielBortoleto,
        Drivers.sergioPerez,
        Drivers.arvidLindblad,
      ],
      provisionalPoints: '-18',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
    {
      player: players.koli,
      drivers: [
        Drivers.pierreGasly,
        Drivers.francoColapinto,
        Drivers.gabrielBortoleto,
        Drivers.valtteriBottas,
        Drivers.estebanOcon,
        Drivers.liamLawson,
        Drivers.arvidLindblad,
        Drivers.isackHadjar,
      ],
      provisionalPoints: '-24',
      confirmedNegativePoints: '',
      confirmedPoints: '',
    },
  ];
}
