import store from '../../../Store';

export const StoreData = () => {
  return store.getState();
};

export const getUserToken = () => {
  const {
    session: {metadata},
  } = StoreData();
  return metadata;
};
