export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const THEME_MAP = {
  '/': 'page--gray page--main',
  '/login': 'page--gray page--login',
  '/favorites': ' ',
  '/offer': ' ',
};
