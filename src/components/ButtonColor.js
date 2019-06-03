import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from '../styles';

const ButtonColor = props => {
    const { img, text, action } = props;

    return (
        <TouchableOpacity onPress={action} style={styles.theme.btnColored}>
            <Image style = {styles.theme.btnIcon} source={img}/>
            {text &&(
            <Text style={styles.theme.btnText}> {text} </Text>
            )}
        </TouchableOpacity>
    )
};

export default ButtonColor;