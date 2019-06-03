import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';
import styles from '../styles';

const SocialBox = ({titulo="SIGA OFERTINHA NAS REDES SOCIAIS"}) => {
    return (
        <View style = { styles.theme.socialRow }>
            <Text style = { styles.theme.socialTitle }>{titulo}</Text>
            <View style={ styles.theme.socialContainer }>
                <TouchableOpacity style={styles.theme.socialTouch} onPress={()=> Linking.openURL('https://www.facebook.com/siteofertinha/')}>
                    <Image style = { styles.theme.iconSocial } source = {require('../icons/facebook.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theme.socialTouch} onPress={()=> Linking.openURL('https://www.youtube.com/channel/UCqQAOPdokat-jQpwn8zrqGQ')}>
                    <Image style = { styles.theme.iconSocial } source = {require('../icons/youtube.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theme.socialTouch} onPress={()=> Linking.openURL('https://www.instagram.com/siteofertinha/')}>
                    <Image style = { styles.theme.iconSocial } source = {require('../icons/instagram.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theme.socialTouch} onPress={()=> Linking.openURL('https://www.facebook.com/groups/grupopromON/')}>
                    <Image style = { styles.theme.iconSocial } source = {require('../icons/group.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SocialBox;