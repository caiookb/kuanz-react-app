import {Goals} from '../server';
import {StoreController} from '../controllers';
import {GoalsActions} from '../redux/actions';

export const createGoal = (dispatch, data) => {
  const token = StoreController.getUserToken();
  console.log('O form chega aqui?', data);
  return Goals.postGoal(data, token)
    .then(res => {
      const {allGoals} = res;
      saveGoalsOnRedux(dispatch, allGoals);
      return res.sucess;
    })
    .catch(err => {
      console.log('Erro no createGoal', err);
      return err;
    });
};

export const listGoal = dispatch => {
  const token = StoreController.getUserToken();
  return Goals.getGoals(token)
    .then(res => {
      const {goals} = res;
      saveGoalsOnRedux(dispatch, goals);
    })
    .catch(err => {
      console.log('Erro no listGoals', err);
    });
};

const isFormValid = (form, handles) => {
  const {setIsFormValid, setFetching} = handles;
  const {name, estimated_date, value, description} = form;
  if (!name || !estimated_date || !value || !description) {
    setIsFormValid(false);
    return false;
  } else {
    setIsFormValid(true);
    setFetching(true);
    const goal = {name, estimated_date, value, description};
    return goal;
  }
};

export const sendForm = (form, handles, history) => {
  const dispatch = StoreController.dispatch();
  const {setSuccess, setFetching, setError} = handles;
  const goal = isFormValid(form, handles);
  console.log('GOAL', goal);
  if (goal) {
    createGoal(dispatch, goal).then(res => {
      setFetching(false);
      setSuccess(true);
      setTimeout(() => {
        history.push('/dashboard');
      }, 3000);
    });
  } else {
    setError('Formulário inválido');
  }
};

export const handleForm = () => {};

export const saveGoalsOnRedux = (dispatch, goals) => {
  return dispatch(GoalsActions.updateGoals(goals));
};
