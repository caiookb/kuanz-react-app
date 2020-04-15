// @flow
import {Incomes} from '../../libs/server';

export const createIncome = async (dispatch, data) => {
  console.log('data', data);
  const req = await Incomes.postIncome(data).catch(err =>
    console.log('parou aqui', err),
  );

  return req;
};
