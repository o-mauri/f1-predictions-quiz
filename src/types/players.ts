import { Player } from './main-types';

export const omar: Player = {
  name: 'Omar',
  initials: 'OM',
  color: '#f78c6b',
  image: 'omar.jpg',
};

export const anna: Player = {
  name: 'Anna',
  initials: 'AS',
  color: '#ffd166',
  image: 'anna.png',
};

export const jazz: Player = {
  name: 'Jazz',
  initials: 'JP',
  color: '#06d6a0',
  image: 'jazz.jpg',
};

export const kundan: Player = {
  name: 'Kundan',
  initials: 'KS',
  color: '#118ab2',
  image: 'kundan.png',
};

export const joe: Player = {
  name: 'Joe',
  initials: 'JE',
  color: '#ef476f',
  image: 'joe.jpg',
};

export const michael: Player = {
  name: 'Michael',
  initials: 'MP',
  color: '#073b4c',
  image: 'michael.jpg',
};

export const koli: Player = {
  name: 'Koli',
  initials: 'KP',
  color: '#00b4d8',
  image: 'koli.jpg',
};

export const players = {
  omar,
  anna,
  jazz,
  kundan,
  joe,
  michael,
  koli,
} as const satisfies Record<string, Player>;

export type PlayerKey = keyof typeof players;
