import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';

const ButtonTipo = props => {
    const { tipo, text, action } = props;

    var cores;

    switch (tipo) {
        case 'produto':
            cores = styles.colors.gradientGreen;
            break;
        case 'servico':
            cores = styles.colors.gradientBlue;
            break;
        case 'procura':
            cores = styles.colors.gradientRed;
            break;
        default:
            cores = styles.colors.gradientGreen;
            break;
    }

    return (
        <TouchableOpacity style={{maxWidth: '30%'}} activeOpacity={0.5} onPress={action}>
            <LinearGradient style={styles.theme.btnTipoGradient} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={cores}>
                <Text style={styles.theme.btnTextGradient}> {text} </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
};

export default ButtonTipo;