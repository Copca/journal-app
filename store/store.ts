import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { journalSlice } from './journal';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		journal: journalSlice.reducer
		// counter: counterSlice.reducer
		// posts: postsReducer,
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export type AppThunk<ReturnType = void> = ThunkAction<
// 	ReturnType,
// 	RootState,
// 	unknown,
// 	Action<string>
// >;
