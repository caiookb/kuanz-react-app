import {IncomesController, StoreController} from '../../libs/controllers';
import moment from 'moment';
const isFormValid = (form, handles, installmentType) => {
  const {
    name,
    value,
    type,
    receiveDate,
    received,
    repeat,
    repeatTimes,
    period,
    income_id,
    installmentId,
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
      receiveDate: moment(receiveDate).add('hours', 12),
      installmentType,
      installmentId,
      income_id,
    };
    const incomeRepeat = {...income, repeat: repeatTimes, period};
    return repeat ? incomeRepeat : income;
  }
};

const handleValue = value => {
  const cleanValue = value
    .split('.')
    .join('')
    .replace(',', '.');
  return parseFloat(cleanValue && cleanValue.replace('R$', ''));
};

export const sendForm = (
  form,
  handles,
  navigation,
  editing,
  installmentType,
  deleting,
) => {
  const dispatch = StoreController.dispatch();
  const {setError, setFetching} = handles;
  const income = isFormValid(form, handles, installmentType);
  console.log('INCOME', income);
  if (income && deleting) {
    console.log('deleting');
    IncomesController.deleteIncome(dispatch, income).then(() => {
      setFetching(false);
      navigation.goBack();
    });
  } else if (income && editing) {
    IncomesController.uptadeIncome(dispatch, income).then(() => {
      setFetching(false);
      navigation.goBack();
    });
  } else if (income) {
    IncomesController.createIncome(dispatch, income).then(() => {
      setFetching(false);
      navigation.goBack();
    });
  }
};
