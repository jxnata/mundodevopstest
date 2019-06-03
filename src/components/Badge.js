import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';

const Badge = props => {
    const { image, text, separator = true } = props;

    return (
        <View style={styles.theme.badgeItem}>
            <Image style = {styles.theme.btnIcon} source={image}/>
            {text &&(
            <Text style={styles.theme.badgeText}> {text} </Text>
            )}
            {separator &&(
            <Text style={styles.theme.badgeSeparator}> | </Text>
            )}
        </View>
    )
};

export default Badge;