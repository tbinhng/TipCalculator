// import { } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Homescreen from './components/Homescreen/Homescreen';

export const Homerouter = StackNavigator({
    HOME_SCREEN: {
        screen: Homescreen,
        navigationOptions: {
            title: 'TIP CALCULATOR',
        },
    },
});
