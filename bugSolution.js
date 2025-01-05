import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initAsyncStorage = async () => {
      try {
        // Perform any initialization tasks here if needed
        await AsyncStorage.setItem('initialized', 'true');
        setReady(true);
      } catch (error) {
        console.error('Error initializing AsyncStorage:', error);
      }
    };

    initAsyncStorage();
  }, []);

  const storeData = async () => {
    if (!ready) return;

    try {
      await AsyncStorage.setItem('myKey', 'myValue');
      console.log('Data saved successfully!');
    } catch (e) {
      console.error('Error saving data:', e);
    }
  };

  return (
    <View>
      <Button title="Store Data" onPress={storeData} />
    </View>
  );
};

export default App; 