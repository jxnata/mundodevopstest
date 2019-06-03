import React from 'react';
import { Image, View } from 'react-native';
import styles from '../styles';
import config from '../config';

const ImageExercice = props => {
    const { image } = props;
    return (
        <View style={styles.theme.circleOverlay}>
            <Image style={styles.theme.iconLarge} source={{uri: config.indexUrl+image}} resizeMode='contain'/>
        </View>
    )
};

export default ImageExercice;