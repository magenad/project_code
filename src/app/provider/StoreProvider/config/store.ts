import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { uiReducer } from 'features/UI';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        ui: uiReducer
    };
    const reducerManager = createReducerManager(rootReducer);
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: _IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api
                    },
                },
            }),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
