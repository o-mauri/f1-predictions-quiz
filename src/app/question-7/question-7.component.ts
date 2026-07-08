import { Component } from '@angular/core';
import { Driver, Player } from '../../types/main-types';
import { players, getPlayerKey } from '../../types/players';
import { Drivers } from '../../types/drivers';
import { QuestionTitleComponent } from '../question-title/question-title.component';
import { PlayerIconComponent } from '../player-icon/player-icon.component';
import { DriverPhotoComponent } from '../driver-photo/driver-photo.component';
import { CommonModule } from '@angular/common';
import { questionScores, QuestionScore } from '../../assets/data/scores';

interface Question7Answer {
  player: Player;
  drivers: Driver[];
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

  podiumDrivers: Driver[] = [Drivers.lanceStroll, Drivers.carlosSainz, Drivers.maxVerstappen, Drivers.valtteriBottas, Drivers.sergioPerez, Drivers.fernandoAlonso, Drivers.alexanderAlbon, Drivers.oliverBearman, Drivers.arvidLindblad, Drivers.gabrielBortoleto, Drivers.estebanOcon, Drivers.francoColapinto
  ];

  getScore(player: Player): QuestionScore {
    return questionScores[7][getPlayerKey(player)];
  }

  fmt(n: number | null): string {
    if (n === null) return '';
    return n >= 0 ? `+${n}` : `${n}`;
  }

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
    },
  ];
}
