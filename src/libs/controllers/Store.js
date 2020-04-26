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

export const date = () => {
  const {calendarDate} = StoreData();
  return calendarDate;
};

export const dispatch = () => {
  return store.dispatch;
};
