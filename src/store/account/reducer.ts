import { createReducer } from '@bitalikrty/redux-create-reducer';
import { Store } from '../../typing';
import { AccountActions } from './action';


const initialState: Store.States.Account = {
  info: {
    data: null,
    isLoading: true,
  },
  
};

export const accountReducer = createReducer<
  Store.States.Account,
  AccountActions
>(initialState, {
  SET_ACCOUNT: (state, { payload }) => {
    return {
      ...state,
      info: {
        data: payload,
        isLoading: false,
      },
    };
  },
});

