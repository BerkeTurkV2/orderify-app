import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from '../Pages/Main/Main';
import Table from '../Pages/Table/Table';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="Table" component={Table} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;