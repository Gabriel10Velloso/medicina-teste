
import { createReducer, on } from '@ngrx/store';
import { isLoading, stopLoading } from '../../actions/loaging/loaging.actions';

export interface LoadingState {
  isLoading: boolean;
}

export const initialState1: LoadingState = {
  isLoading: false,
}

const _isloadingReducer = createReducer(initialState1,

  on(isLoading, state => ({ ...state, isLoading: true })),
  on(stopLoading, state => ({ ...state, isLoading: false })),
);

export function isloadingReducer(state:any, action:any) {
  return _isloadingReducer(state, action);
}