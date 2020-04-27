import {SpendingsActions} from '../redux/actions';
import {Spendings} from '../server';
import {StoreController} from '../controllers';

import {SpendingsController} from '../../libs/controllers';

const isFormValid = (form, handles) => {
  const {name, value, type, paid, paidDate, repeat, repeatTimes, period} = form;
  const {setError, setFetching} = handles;

  if (!name && !value && !type && !paid && !paidDate) {
    setError('Preencha todos os campos!');
    return false;
  } else {
    setFetching(true);
    const spending = {
      name,
      value: handleValue(),
      type,
      paid,
      paidDate,
    };
    const spendingRepeat = {...spending, repeat: repeatTimes, period};
    console.log('spending to send', spending, spendingRepeat);
    return repeat ? spendingRepeat : spending;
  }
};

export const sendForm = (form, handles) => {
  const spending = isFormValid(form, handles);
  console.log('SPENDING', spending);
};

const handleValue = () => {
  const {value} = this.state;
  const cleanValue = value
    .split('.')
    .join('')
    .replace(',', '.');
  return parseFloat(cleanValue && cleanValue.replace('R$', ''));
};

export const createSpending = (dispatch, data) => {
  const date = StoreController.date();
  const token = StoreController.getUserToken();
  return Spendings.postSpending(data, token, date.firstDate, date.lastDate)
    .then(res => {
      const {allSpendings, totalValue} = res;
      const spendingObject = {allSpendings, totalValue};
      saveSpendingsOnRedux(dispatch, spendingObject);
      return res;
    })
    .catch(err => {
      return err;
    });
};

export const fetchAllSpendings = (dispatch, tokinho) => {
  const date = StoreController.date();
  const token = StoreController.getUserToken();
  return Spendings.getAllSpendings(date.firstDate, date.lastDate, token)
    .then(spendings => {
      saveSpendingsOnRedux(dispatch, spendings);
    })
    .catch(err => {
      console.log('Erro no fetchAllSpendings', err);
    });
};

export const saveSpendingsOnRedux = (dispatch, spendings) => {
  return dispatch(SpendingsActions.updateSpendings(spendings));
};
