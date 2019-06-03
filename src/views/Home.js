import React, {Component} from 'react';
import { View, StatusBar } from 'react-native';
import ListFilters from '../components/ListFilters';
import ListExercices from '../components/ListExercices';
import Separator from '../components/Separator';
import styles from '../styles';
import data from '../data/data.json';

export default class Home extends Component {

	constructor (props) {
        super(props);

        this.state = {
            data: {filters: [], exercices: []},
            checkeds: ['Yoga', 'Lower Body'],
            loading: false,
		}
    }

	async componentDidMount()
	{
        this.setState({data});
    }

    filter(tipo) {
        let array = this.state.checkeds;
        let index = array.indexOf(tipo)
        index >= 0 ? array.splice(index, 1) : array.push(tipo);
        this.setState({checkeds: array});
    }

	render() {
        return (
            <View style={styles.theme.container}>
                <StatusBar backgroundColor={styles.colors.secondary} barStyle="light-content"/>
                <Separator marginTop={10} marginBottom={10}/>
                {/* { this.state.data.filters.length > 0 &&( */}
                    <View style={styles.theme.box}>
                    <ListFilters filters={this.state.data.filters} checkeds={this.state.checkeds} onPress={param => this.filter(param)}/>
                </View>
                {/* )} */}
                <Separator marginBottom={10} line={false}/>
                <ListExercices exercices={this.state.data.exercices}/>
            </View>
        );
    }
}