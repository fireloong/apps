import { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'ice';
import nav from './models/nav';

interface IAppStoreModels extends IStoreModels {
  nav: typeof nav;
}

const appModels: IAppStoreModels = {
  nav,
};

const store = createStore(appModels);

export default store;

export type IRootDispatch = IStoreDispatch<typeof appModels>;
export type IRootState = IStoreRootState<typeof appModels>;
