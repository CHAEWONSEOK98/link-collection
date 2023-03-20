import { atom } from 'recoil';

export const subPagesState = atom({
  key: 'subPagesState',
  default: [],
});

export const siteToggleState = atom({
  key: 'siteToggleState',
  default: false,
});
