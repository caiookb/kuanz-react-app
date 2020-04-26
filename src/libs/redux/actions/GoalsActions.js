import {GoalsTypes} from '../types';

export const updateGoals = (session): Action => ({
  type: GoalsTypes.UPDATE_GOALS,
  payload: session,
});

export const updateGoalsField = (field, data) => ({
  type: GoalsTypes.UPDATE_GOALS_FIELD,
  payload: {field: field, data},
});
