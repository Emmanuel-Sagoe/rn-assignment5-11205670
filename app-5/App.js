import React, { useState, useEffect, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Homepage from './Homepage';
import Settings from './Settings';

const Stack = createStackNavigator();

const ThemeContext = createContext();

const getInitialTheme = async () => {
  const storedTheme = await AsyncStorage.getItem('theme');
  return storedTheme || 'light';
};

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    (async () => {
      const initialTheme = await getInitialTheme();
      setTheme(initialTheme);
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomepageWithTheme} />
          <Stack.Screen name="Settings" component={SettingsWithTheme} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

const HomepageWithTheme = (props) => {
  const { theme } = useContext(ThemeContext);
  return <Homepage {...props} theme={theme} />;
};

const SettingsWithTheme = (props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <Settings {...props} theme={theme} toggleTheme={toggleTheme} />;
};

export default App;



