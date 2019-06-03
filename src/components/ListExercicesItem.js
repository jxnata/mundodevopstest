import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import ImageExercice from '../components/ImageExercice';
import Badge from '../components/Badge';
import Label from '../components/Label';
import styles from '../styles';

const ListExercicesItem = props => {
    const { exercice, action } = props;

    return (
        <View style={{paddingVertical: 15}}>
            <TouchableOpacity style={styles.theme.box} onPress={action}>
                <View style={{flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 10}}>
                    <ImageExercice image={exercice.image} />
                    <View style={{marginLeft: 20, alignSelf:'center'}}>
                        <Text style={styles.theme.blockTitle}>{exercice.name.toUpperCase()}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Badge image={require('../img/ic_bike.png')} text={exercice.calories + ' Kcal'}/>
                            <Badge image={require('../img/ic_time.png')} text={exercice.time % 60 == 0 ? exercice.time / 60 + ' h' : exercice.time + ' min'}/>
                            <Badge image={require('../img/ic_balance.png')} text={exercice.weight + ' Kg'} separator={false}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Label text='HOJE' value={exercice.when} />
                            <Label text='ONTEM' value={exercice.when} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ListExercicesItem;