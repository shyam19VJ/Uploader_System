import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App(){
  return (
    <Provider store={store}>
      <SafeAreaProvider>
      {/* App will start here */}
      </SafeAreaProvider>
    </Provider>
   
  );
}