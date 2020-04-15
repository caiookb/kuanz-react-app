import {Goals} from '../../../../libs/server';

export const createGoal = async (dispatch, data) => {
  const req = await Goals.postGoal(data);
  return req;
};

export const listGoal = async (dispatch, data) => {
  const req = await Goals.getGoals();
  return req;
};
