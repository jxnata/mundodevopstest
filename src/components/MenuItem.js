import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import styles from '../styles';

const MenuItem = props => {
    const { imagem, titulo, subtitulo = 'Subtítulo', acao } = props;
    return (
        <TouchableHighlight onPress={acao} style={style.border} underlayColor={styles.colors.primary}>
            <View style = { style.row }>
                <Image style = { styles.theme.featured } source={ imagem }/>
                <View>
                    <Text style = { styles.theme.menuSubtitle }> { subtitulo } </Text>
                    <Text style = { styles.theme.menuTitle }> { titulo } </Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

const style = StyleSheet.create({
    row: {
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    border: {
        flex: 2,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        borderRadius: 15,
    },
});

export default MenuItem;