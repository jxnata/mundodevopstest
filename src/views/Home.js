import React, {Component} from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import ImageRound from '../components/ImageRound';
import styles from '../styles';
import data from '../data/data.json';

export default class Home extends Component {

	constructor (props) {
        super(props);

        this.state = {
            data: {filters: [], exercises: []},
            busca: '',
            loading: false,
            logado: false,
            localizacao: {type:"Point", coordinates:[0,0]},
		}
    }

	async componentDidMount()
	{
        this.refresh();
    }
    
    async refresh() {
        await this.setState({data});
    }

	render() {
        return (
            <View style={styles.theme.container}>
                <StatusBar backgroundColor={styles.colors.secondary} barStyle="light-content"/>
                { this.state.data.filters.length > 0 &&(
                <View style={styles.theme.box}>
                    <ImageRound image={require(`../img/ic_yoga.png`)}/>
                </View>
                )}
                <ScrollView>
                </ScrollView>
            </View>
        );
    }
}