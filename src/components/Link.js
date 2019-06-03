import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles';

const Link = props => {
    const { text, action } = props;

    return (
        <TouchableOpacity onPress={action}>
            <Text style={styles.theme.linkButton}> {text} </Text>
        </TouchableOpacity>
    )
};

export default Link;