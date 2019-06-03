import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';
import metrics from '../styles/metrics';


const ButtonLike = (props) => {
    const { liked, action, logado, size = 'small' } = props;

    if (size == 'small') {
        if (liked == true) {
            return (
                <TouchableOpacity hitSlop={metrics.hitSlopLike} disabled={!logado} onPress={action} style={styles.theme.btnLiked}>
                    <Icon name="heart" size={12} color={styles.colors.light} />
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity hitSlop={metrics.hitSlopLike} disabled={!logado} onPress={action} style={styles.theme.btnUnliked}>
                <Icon name="heart" size={12} color={styles.colors.dark} />
            </TouchableOpacity>
        );
    }
    if (size == 'large') {
        if (liked) {
            return (
                <TouchableOpacity hitSlop={metrics.hitSlopLike} disabled={!logado} onPress={action} style={styles.theme.btnLikedLg}>
                    <Icon name="heart" size={14} color={styles.colors.light} />
                </TouchableOpacity>
            );
        }
        return (
            <TouchableOpacity hitSlop={metrics.hitSlopLike} disabled={!logado} onPress={action} style={styles.theme.btnUnlikedLg}>
                <Icon name="heart" size={14} color={styles.colors.dark} />
            </TouchableOpacity>
        );
    }
};

export default ButtonLike;