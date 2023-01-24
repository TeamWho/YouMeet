import { atom } from 'jotai';

const storeAtom = atom<null | Record<string, any>>(null);

export const state = {
    storeAtom
};