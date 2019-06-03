import React from 'react';
import { ScrollView, Image, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

const ListImages = props => {
    const { imagens, remover } = props;

    return (
        <ScrollView horizontal={true}>
        {imagens.map((item, index) => {
            return (
                <View key={index}>
                    <Image style={styles.theme.thumbnail} source={{uri : item }} resizeMode='cover' />
                    <TouchableOpacity hitSlop={styles.metrics.hitSlopLike} style={styles.theme.closeButton} onPress={() => remover({index})}>
                        <Icon name="x" size={20} color={styles.colors.red}/>
                    </TouchableOpacity>
                </View>
            ) 
        })}
        </ScrollView>
    )
};

export default ListImages;