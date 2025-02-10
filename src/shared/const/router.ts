import { transliterate } from '../utils/transliterate/transliterate';

export const getRouteMain = () => '/';

export const getRouteTheory = () => '/theory';

export const getRouteDictant = (theme: string, subtheme: string) =>
  `/dictants/${transliterate(theme)}/${transliterate(subtheme)}`;

export const getRouteTrainer = (theme: string) =>
  `/trainers/${transliterate(theme)}`;

export const getRouteTests = (theme: string) =>
  `/tests/${transliterate(theme)}`;

export const getRoutePartsOfSpeach = (theme: string) =>
  `/parts-of-speech/${transliterate(theme)}`;

export const getRouteNotFound = () => '*';
