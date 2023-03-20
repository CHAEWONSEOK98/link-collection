import { atom } from 'recoil';

export const mainPagesConnect = atom({
  key: 'mainPagesConnect',
  default: [],
});

export const sitesToggleState = atom({
  key: 'sitesToggleState',
  default: false,
});
