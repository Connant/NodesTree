import { ActionType } from './reducer';
import { createAction } from '@reduxjs/toolkit';


export const addRoute = createAction(
    ActionType.ADD,
    (route) => ({ payload: route }),
);

export const deleteRoute = createAction(
    ActionType.DELETE,
    (route) => ({ payload: route }),
);

