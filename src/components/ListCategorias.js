import React from 'react';
import { FlatList } from 'react-native';
import ListCategoriasItem from './ListCategoriasItem';
import styles from '../styles';

const ListCategorias = props => {
    const { categorias, onPressItem } = props;

    return (
        <FlatList
            style={{marginBottom: 180}}
            numColumns={2}
            data={categorias}
            renderItem={({item}) => (
                <ListCategoriasItem categoria={item} action={onPressItem}/>
            )}
            keyExtractor={item => item.id}
        />
    )
};

export default ListCategorias;