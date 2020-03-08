import { createSelector } from '@ngrx/store';
import { AppState } from '@app/app.config';
import * as fromDrafts from '../reducers/draft.reducer';
import { getAppState } from '../reducers/reducers.index';

export const getDraftState = createSelector(
  getAppState,
  (state: AppState) => state.drafts
);

export const getDraft = createSelector(
  getDraftState, fromDrafts.getDraft
);

export const getDraftLoaded = createSelector(
  getDraftState, fromDrafts.getDraftLoaded
);

export const getShowDraftSnack = createSelector(
  getDraftState, fromDrafts.getShowDraftSnack
);
