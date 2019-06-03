import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const Label = props => {
    const { text, value } = props;
    if (value == 'today' && text == 'HOJE') {
        return (
            <View style={styles.theme.labelToday}>
                {text &&(
                <Text style={styles.theme.label}> {text} </Text>
                )}
            </View>
        )
    }
    if (value == 'yesterday' && text == 'ONTEM') {
        return (
            <View style={styles.theme.labelYesterday}>
                {text &&(
                <Text style={styles.theme.label}> {text} </Text>
                )}
            </View>
        )
    }
    return (
        <View style={styles.theme.labelItem}>
            {text &&(
            <Text style={styles.theme.label}> {text} </Text>
            )}
        </View>
    )
};

export default Label;