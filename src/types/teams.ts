import { Team } from './main-types';

export const ferrari: Team = {
  name: 'Ferrari',
  primaryColor: '#E80020',
  secondaryColor: '#ffffff',
  logo: 'ferrari.png',
};

export const mercedes: Team = {
  name: 'Mercedes',
  primaryColor: '#27F4D2',
  secondaryColor: '#000000',
  logo: 'mercedes.png',
};

export const redBull: Team = {
  name: 'Red Bull',
  primaryColor: '#3671C6',
  secondaryColor: '#FCD700',
  logo: 'redbull.png',
};

export const mclaren: Team = {
  name: 'McLaren',
  primaryColor: '#FF8000',
  secondaryColor: '#000000',
  logo: 'mclaren.png',
};

export const alpine: Team = {
  name: 'Alpine',
  primaryColor: '#0093CC',
  secondaryColor: '#FF87BC',
  logo: 'alpine.png',
};

export const astonMartin: Team = {
  name: 'Aston Martin',
  primaryColor: '#229971',
  secondaryColor: '#000000',
  logo: 'astonmartin.png',
};

export const racingBulls: Team = {
  name: 'Racing Bulls',
  primaryColor: '#6692FF',
  secondaryColor: '#ffffff',
  logo: 'racingbulls.png',
};

export const williams: Team = {
  name: 'Williams',
  primaryColor: '#64C4FF',
  secondaryColor: '#041E42',
  logo: 'williams.png',
};

export const haas: Team = {
  name: 'Haas',
  primaryColor: '#ffffff',
  secondaryColor: '#E6002B',
  logo: 'haas.png',
};

export const cadillac: Team = {
  name: 'Cadillac',
  primaryColor: '#091761',
  secondaryColor: '#ffffff',
  logo: 'cadillac.png',
};

export const audi: Team = {
  name: 'Audi',
  primaryColor: '#454242',
  secondaryColor: '#b50c00',
  logo: 'audi.png',
};

export const Teams = {
  ferrari,
  mercedes,
  redBull,
  mclaren,
  alpine,
  astonMartin,
  racingBulls,
  williams,
  haas,
  cadillac,
  audi,
} as const satisfies Record<string, Team>;

export type TeamKey = keyof typeof Teams;
