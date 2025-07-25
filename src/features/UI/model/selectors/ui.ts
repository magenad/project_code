import { StateSchema } from '@/app/provider/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getUIScroll = (state:StateSchema)=>state.ui.scroll;
export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: StateSchema, path:string)=>path,
    (scroll,path)=>scroll[path] || 0
);