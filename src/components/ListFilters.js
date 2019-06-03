import React from 'react';
import { ScrollView } from 'react-native';
import ImageRound from '../components/ImageRound';

const ListFilters = props => {
    const { filters, checkeds, onPress } = props;

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {filters.map((item, index) => {
            var check = checkeds.indexOf(item.name) >= 0 ? true : false;
            return (
                <ImageRound image={item.image} checked={check} key={index}/>
            ) 
        })}
        </ScrollView>
    )
};

export default ListFilters;