import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

const ButtonIcon = props => {
    const { icon, text, action, colored = true } = props;

    return (
        <TouchableOpacity onPress={action} style={styles.theme.btnTransparent}>
            <Icon name={icon} size={20} color={styles.colors.primary}/>
            {text && colored &&(
            <Text style={styles.theme.btnTextColored}> {text} </Text>
            )}
            {text && colored == false &&(
            <Text style={styles.theme.btnText}> {text} </Text>
            )}
        </TouchableOpacity>
    )
};

export default ButtonIcon;