import { atom } from 'recoil';

export const mainPagesState = atom({
  key: 'pagesState',
  default: [],
});

export const categoryToggleState = atom({
  key: 'categoryToggleState',
  default: false,
});
