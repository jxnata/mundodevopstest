import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';


const ButtonLike = (props) => {
    const { link } = props;
    return (
        <TouchableOpacity
        onPress={() => Share.share({
            message: 'Veja esse anúncio: ' + link,
            url: link,
            title: 'Encontrei'
        }, {
            dialogTitle: 'Compartilhar anúncio'
        })}
        style={styles.theme.btnShare}>
            <Icon name="share" size={18} color={styles.colors.light} />
        </TouchableOpacity>
    );
};

export default ButtonLike;