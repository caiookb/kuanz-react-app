import {IncomesController, StoreController} from '../../libs/controllers';

const isFormValid = (form, handles) => {
  const {
    name,
    value,
    type,
    receiveDate,
    received,
    repeat,
    repeatTimes,
    period,
  } = form;
  const {setError, setFetching} = handles;

  if (!name || !value || !type || !receiveDate) {
    setError('Preencha todos os campos');
    return false;
  } else {
    setFetching(true);
    const income = {
      name,
      value: handleValue(value),
      type,
      received,
      receiveDate,
    };
    const incomeRepeat = {...income, repeat: repeatTimes, period};
    return repeat ? incomeRepeat : income;
  }
};

const handleValue = value => {
  console.log('value', value);
  const cleanValue = value
    .split('.')
    .join('')
    .replace(',', '.');
  return parseFloat(cleanValue && cleanValue.replace('R$', ''));
};

export const sendForm = (form, handles) => {
  const dispatch = StoreController.dispatch();
  const {setError, setFetching} = handles;
  const income = isFormValid(form, handles);
  console.log('INCOME', income);
  if (income) {
    IncomesController.createIncome(dispatch, income).then(() => {
      setFetching(false);
      //Navigate back to dashboard
    });
  }
};
