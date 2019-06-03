import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles';

const ButtonGoogle = props => {
    const { img, text, action } = props;

    return (
        <TouchableOpacity onPress={action} style={styles.theme.btnGoogle}>
            <Image style = {styles.theme.btnIcon} source={img}/>
            {text &&(
            <Text style={styles.theme.btnTextDark}> {text} </Text>
            )}
        </TouchableOpacity>
    )
};

export default ButtonGoogle;