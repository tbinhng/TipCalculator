import React, { } from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Homescreen from './components/Homescreen/Homescreen';
import Settingscreen from './components/Settingscreen/Settingscreen';

export const Homerouter = StackNavigator({
    HOME_SCREEN: {
        screen: Homescreen,
        navigationOptions: ({ navigation }) => ({
            title: 'TIP CALCULATOR',
            headerRight: <Button
                title="Setting"
                onPress={() => navigation.navigate('SETTING_SCREEN')}
            />,
        }),
    },
    SETTING_SCREEN: {
        screen: Settingscreen,
        navigationOptions: ({ navigation }) => ({
            title: 'SETTING',
            headerRight: <Button
                onPress={() => navigation.goBack()}
            />
        }),
    }
});
