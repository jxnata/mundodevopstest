import React from 'react';
import { FlatList } from 'react-native';
import ListExercicesItem from './ListExercicesItem';

const ListExercices = props => {
    const { exercices, onPressItem } = props;

    return (
        <FlatList
            numColumns={1}
            data={exercices}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
                <ListExercicesItem exercice={item} action={onPressItem} key={index}/>
            )}
            keyExtractor={item => item.id}
        />
    )
};

export default ListExercices;