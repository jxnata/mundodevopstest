import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';

const ImageRound = props => {
    const { image, action = false } = props;

    if (action) {
        return (
            <TouchableOpacity style={styles.theme.iconDefault} onPress={action}>
                <LinearGradient style={styles.theme.iconTabRound} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={styles.colors.gradient}>
                    <Image style={styles.theme.thumbnail} source={image} resizeMode='contain' />
                </LinearGradient>
            </TouchableOpacity>
        )
    } else {
        return (
            <View style={styles.theme.iconDefault} onPress={() => action}>
                <LinearGradient style={styles.theme.iconTabRound} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={styles.colors.gradient}>
                    <Image style={styles.theme.thumbnail} source={image} resizeMode='contain' />
                </LinearGradient>
            </View>
        )
    }
};

export default ImageRound;