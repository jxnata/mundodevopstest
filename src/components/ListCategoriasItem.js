import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';

const ListCategoriasItem = props => {
    const { categoria, action } = props;
    const hora = new Date().getHours();

    if (categoria.hora_abre <= hora && categoria.hora_fecha >= hora) {
        return (
            <TouchableOpacity style={[styles.theme.blockAnuncio, {backgroundColor: categoria.cor}]} onPress={() => action(categoria)}>
                <Image style={styles.theme.thumbnail} resizeMode='contain' source={{uri: categoria.imagem}} />
                <Text style={styles.theme.blockTitle}>{categoria.titulo.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={[styles.theme.blockAnuncio, {backgroundColor: categoria.cor}]}>
            <Text style={styles.theme.textSmall}>INDISPONÍVEL</Text>
            <View style={{alignItems: 'center', justifyContent: 'center', opacity: 0.5}}>
                <Image style={styles.theme.thumbnail} resizeMode='contain' source={{uri: categoria.imagem}} />
                <Text style={styles.theme.blockTitle}>{categoria.titulo.toUpperCase()}</Text>
            </View>
        </View>
    )
};

export default ListCategoriasItem;