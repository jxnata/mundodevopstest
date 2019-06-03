import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

const ListMenuItem = props => {
    const { item, text, action = null, center = true, disabled = false, status = 'default', icon = 'chevron-right' } = props;
    var styleBlock = center ? styles.theme.listItemBlockCenter : styles.theme.listItemBlock;

    if (status == 'success') {
        if (disabled) {
            return (
                <View opacity={0.4} style={styleBlock}>
                    <Icon name={icon} size={18} color={styles.colors.primary} />
                    <Text style={ styles.theme.btnListPrimary }> {text} </Text>
                </View>
            )
        }
        return (
            <TouchableOpacity onPress={() => action({item})}  style={styleBlock}>
                <Icon name={icon} size={18} color={styles.colors.primary} />
                <Text style={ styles.theme.btnListPrimary }> {text} </Text>
            </TouchableOpacity>
        )
    }

    if (status == 'error') {
        if (disabled) {
            return (
                <View opacity={0.4} style={styleBlock}>
                    <Icon name={icon} size={18} color={styles.colors.red} />
                    <Text style={ styles.theme.btnListError }> {text} </Text>
                </View>
            )
        }
        return (
            <TouchableOpacity onPress={() => action({item})} style={styleBlock}>
                <Icon name={icon} size={18} color={styles.colors.red} />
                <Text style={ styles.theme.btnListError }> {text} </Text>
            </TouchableOpacity>
        )
    }

    if (disabled) {
        return (
            <View opacity={0.6} style={styleBlock}>
                <Icon name={icon} size={18} color={styles.colors.dark} />
                <Text style={ styles.theme.btnList }> {text} </Text>
            </View>
        )
    }

    return (
        <TouchableOpacity onPress={() => action({item})} style={styleBlock}>
            <Icon name={icon} size={18} color={styles.colors.dark} />
            <Text style={ styles.theme.btnList }> {text} </Text>
        </TouchableOpacity>
    )
};

export default ListMenuItem;