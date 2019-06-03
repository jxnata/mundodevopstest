import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

const ListItem = props => {
    const { texto, acao, img } = props;

    return (
        <View style={{width: Dimensions.get('screen').width - 20}}>
            <TouchableOpacity onPress={() => acao()} style={styles.theme.borderItem}>
                <View style = { styles.theme.item }>
                    <Image style = { styles.theme.icon } source={img}/>
                    <View style = {{marginLeft: 10}}>
                        <Text style = { styles.theme.badgeText }> {texto} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ListItem;