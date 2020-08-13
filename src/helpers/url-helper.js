import { DEFAULT_TAB } from '../constants/ui-constants';

export const getActiveTab = (location) => {
  const { pathname } = location;
  const route = pathname.split('/')[1];

  if (!route) {
    return DEFAULT_TAB;
  }

  return route;
};
