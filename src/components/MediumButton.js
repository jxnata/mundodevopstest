import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

const MediumButton = props => {
    const { text, action, icon } = props;

    return (
        <TouchableOpacity onPress={action} style={styles.theme.mediumButton}>
            {icon &&(
                <Icon name={icon} size={14} color={styles.colors.light} />
            )}
            <Text style={styles.theme.btnTextCenterMedium}> {text} </Text>
        </TouchableOpacity>
    )
};

export default MediumButton;