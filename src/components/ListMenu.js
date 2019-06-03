import React from 'react';
import { FlatList } from 'react-native';
import ListMenuItem from './ListMenuItem';

const ListMenu = props => {
    const { lista, center = false, onPressItem } = props;

    return (
        <FlatList data={lista} renderItem={({item}) => (
            <ListMenuItem item={item} center={center} text={item.titulo} action={onPressItem}/>
        )}
        keyExtractor={item => item.id}/>
    )
};

export default ListMenu;