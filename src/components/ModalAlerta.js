import React from 'react';
import { View, Modal, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Separator from '../components/Separator';
import styles from '../styles';
import metrics from '../styles/metrics';

const ModalAlerta = props => {
    const { mensagem, visible, onCancel, loading, titulo } = props;
    if(loading){
        return (
            <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => {}}>
                <View style={styles.theme.modalContainer}>
                    <View style={styles.theme.modalLoad}>
                        <ActivityIndicator size="large" color={styles.colors.primary}/>
                    </View>
                </View>
            </Modal>
        )
    } else{
        return (
            <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={() => {onCancel}}>
                <View style={styles.theme.modalContainer}>
                    <View style={styles.theme.modal}>
                        <View style={styles.theme.titleModal}>
                            <Text style={styles.theme.textContent}>{titulo}</Text>
                            <TouchableOpacity hitSlop={metrics.hitSlopLike} style={styles.theme.closeButton} onPress={onCancel}>
                                <Icon name="x" size={22} color={styles.colors.red}/>
                            </TouchableOpacity>
                        </View>
                        <Separator/>
                        <View>
                            <Text style={styles.theme.label}>{mensagem}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
};

export default ModalAlerta;