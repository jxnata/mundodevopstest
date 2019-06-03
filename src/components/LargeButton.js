import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

const LargeButton = props => {
    const { text, action, icon } = props;

    return (
        <TouchableOpacity onPress={action} style={styles.theme.largeButton}>
            {icon &&(
                <Icon name={icon} size={18} color={styles.colors.light} />
            )}
            <Text style={styles.theme.btnTextCenter}> {text} </Text>
        </TouchableOpacity>
    )
};

export default LargeButton;