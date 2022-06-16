import { configureStore } from "@reduxjs/toolkit";
import { paperApi } from "./services/paperApi";

export default configureStore({
  reducer: {
    [paperApi.reducerPath]: paperApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paperApi.middleware),
});
