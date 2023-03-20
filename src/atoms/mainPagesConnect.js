import { atom } from 'recoil';

export const mainPagesConnect = atom({
  key: 'mainPagesConnect',
  default: [],
});

export const siteToggleState = atom({
  key: 'siteToggleState',
  default: false,
});
