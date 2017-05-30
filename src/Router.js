import React, { } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Homescreen from './components/Homescreen/Homescreen';
import Settingscreen from './components/Settingscreen/Settingscreen';

export const Homerouter = StackNavigator({
    HOME_SCREEN: {
        screen: Homescreen,
        navigationOptions: ({ navigation }) => ({
            title: 'TIP CALCULATOR',
            headerRight: <TouchableOpacity
                onPress={() => navigation.navigate('SETTING_SCREEN')}
            >
                <Text>Setting</Text>
            </TouchableOpacity>
        }),
    },
    SETTING_SCREEN: {
        screen: Settingscreen,
        navigationOptions: {
            title: 'SETTING',

        },
    }
});
