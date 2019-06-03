import React from 'react';
import { View } from 'react-native';
import styles from '../styles';

const Separator = props => {
    const { marginTop = 0, marginBottom = 0, line = true } = props;
    return (
        <View style={{
            borderBottomColor: line ? styles.colors.secondary : 'transparent',
            borderBottomWidth: 1,
            marginTop:marginTop,
            marginBottom: marginBottom}}
        />
    )
};

export default Separator;