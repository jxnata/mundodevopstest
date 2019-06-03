import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles';

const CheckBoxTipo = props => {
    const { checked = false, text, action } = props;

    return (
        <TouchableOpacity style={styles.theme.btnTipoGradient} activeOpacity={0.5} onPress={action}>
            {checked &&(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="check-circle" size={16} color={styles.colors.light} />
                <Text style={styles.theme.btnTextGradient}> {text} </Text>
            </View>
            )}
            {!checked &&(
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="circle" size={16} color={styles.colors.light} />
                <Text style={styles.theme.btnTextGradient}> {text} </Text>
            </View>
            )}
        </TouchableOpacity>
    )
};

export default CheckBoxTipo;