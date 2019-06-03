import React from "react";
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';
import styles from './src/styles';
import colors from './src/styles/colors';

import Home from './src/views/Home';

const AppStack = createStackNavigator(
    {
        Home: Home,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <TouchableOpacity style={styles.theme.btnHeader} onPress={() => null}>
                        <Icon name="menu" size={20} color={colors.light}/>
                    </TouchableOpacity>
                ),
                headerTitle: (
                    <Text style={styles.theme.headerSubtitle}>MEU PERFIL</Text>
                ),
                headerRight: (
                    <TouchableOpacity style={styles.theme.btnHeader} onPress={() => null}>
                        <Icon name="settings" size={20} color={colors.light}/>
                    </TouchableOpacity>
                ),
                headerStyle: styles.theme.header,
                headerBackTitle: null,
                headerTitleStyle: styles.theme.headerSubtitle,
                headerTintColor: styles.colors.light,
            }
        },
    },
);


export default createAppContainer(AppStack);