import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from '../Screens/InputScreen';
import FirstScreen from '../Screens/FirstScreen';
import Display from'../Screens/Display';
const Stack = createNativeStackNavigator();

 class Tabnavigation extends React.Component{
    render() {
      return (
            <NavigationContainer>
              <Stack.Navigator>
               <Stack.Screen name="FirstScreen" component={FirstScreen}  />
                <Stack.Screen name="InputScreen" component={InputScreen} />
                <Stack.Screen name="Display" component={Display} />
              </Stack.Navigator>
            </NavigationContainer>
           );
    }
}
export default Tabnavigation;
