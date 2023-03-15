import { useAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { state } from '../state';
import { useState } from 'react';

export const useInitStore = () => {
  const [isStoreInitiated, setIsStoreInitiated] = useState(false);
  const [_, setStore] = useAtom(state.storeAtom);

  const initStore = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      if (!keys || !result || keys?.length === 0 || result?.length === 0) return {};
      const finalStore = result.reduce((acc, [key, value]) => ({
        ...(acc || {}),
        [key]: value
      }), {});


      setStore(finalStore);
    } catch(err) {
      console.log(err);
    } finally {
      setIsStoreInitiated(true);
    }
  };

  return {
    init: initStore,
    isStoreInitiated,
  };
};

export const useStore = () => {
  const [store, setStore] = useAtom(state.storeAtom);

  const getField = (key: string) => store?.[key];
  const getStore = () => store;

  const updateStoreField = async (key: string, value: any) => {
    await AsyncStorage.setItem(key, value);

    setStore({
      ...(store || {}),
      [key]: value
    });
  };

  const clearStore = () => {
    setStore(null);
    AsyncStorage.clear();
  };

  return {
    getStoreField: getField,
    getStore,
    setStoreField: updateStoreField,
    clearStore,
  };
};