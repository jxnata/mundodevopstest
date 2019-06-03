import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';
import config from '../config';

const ImageRound = props => {
    const { image, name, checked = false, onPress } = props;

    return (
        <TouchableOpacity style={styles.theme.iconDefault} onPress={() => onPress(name)}>
            {checked && (
                <View style={styles.theme.iconCheck}>
                    <Icon name="check" size={16} backgroundColor={styles.colors.green} color={styles.colors.light} />
                </View>
            )}
            <LinearGradient style={styles.theme.iconTabRound} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={styles.colors.gradient}>
                <Image style={styles.theme.thumbnail} source={{uri: config.indexUrl+image}} resizeMode='contain' />
            </LinearGradient>
        </TouchableOpacity>
    )
};

export default ImageRound;