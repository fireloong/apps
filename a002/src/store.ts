import { createStore, IStoreModels, IStoreDispatch, IStoreRootState } from 'ice';
import info from '@/models/info';

interface IAppStoreModels extends IStoreModels {
  info: typeof info;
}
const appModels: IAppStoreModels = {
  info,
};
const store = createStore(appModels);

export default store;

export type IRootDispatch = IStoreDispatch<typeof appModels>;
export type IRootState = IStoreRootState<typeof appModels>;
