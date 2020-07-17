import { wrapper } from "../redux/store";
import { useStore } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export default wrapper.withRedux(({ Component, pageProps }) => {
  const store = useStore();
  const persistor = persistStore(store);

  return (
    <PersistGate persistor={persistor} loading={<Component {...pageProps} />}>
      <Component {...pageProps} />
    </PersistGate>
  );
});
