import {SpendingsController, StoreController} from '../../libs/controllers';

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
      value: handleValue(value),
      type,
      paid,
      paidDate,
    };
    const spendingRepeat = {...spending, repeat: repeatTimes, period};
    return repeat ? spendingRepeat : spending;
  }
};

export const sendForm = (form, handles, navigation) => {
  const dispatch = StoreController.dispatch();
  const {setError, setFetching} = handles;
  const spending = isFormValid(form, handles);

  if (spending) {
    SpendingsController.createSpending(dispatch, spending).then(() => {
      setFetching(false);
      navigation.goBack();
    });
  }
};

const handleValue = value => {
  const cleanValue = value
    .split('.')
    .join('')
    .replace(',', '.');
  return parseFloat(cleanValue && cleanValue.replace('R$', ''));
};
