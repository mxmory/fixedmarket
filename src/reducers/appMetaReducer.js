import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export const appMetaReducer = handleActions(
    {
        // [actions.setSetupStep](state, { payload }) {
        //     return {
        //         ...state,
        //         currentSetupStep: payload,
        //     };
        // },
    },
    {}
);
