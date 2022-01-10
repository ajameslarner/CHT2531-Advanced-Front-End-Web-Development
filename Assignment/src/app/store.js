import { configureStore } from '@reduxjs/toolkit';

import { CoinAPI } from '../services/CoinAPI';
import { UpdatesAPI } from '../services/UpdatesAPI';

export default configureStore({
    reducer: {
        [CoinAPI.reducerPath]: CoinAPI.reducer,
        [UpdatesAPI.reducerPath]: UpdatesAPI.reducer,
    },
});