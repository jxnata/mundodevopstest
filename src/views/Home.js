import React, {Component} from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
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
            checkeds: ['Yoga'],
            loading: false,
		}
    }

	async componentDidMount()
	{
        this.setState({data});
    }

	render() {
        return (
            <View style={styles.theme.container}>
                <StatusBar backgroundColor={styles.colors.secondary} barStyle="light-content"/>
                <Separator marginTop={10} marginBottom={10}/>
                { this.state.data.filters.length > 0 &&(
                    <View style={styles.theme.box}>
                    <ListFilters filters={this.state.data.filters} checkeds={this.state.checkeds}/>
                </View>
                )}
                <Separator marginBottom={10} line={false}/>
                <ListExercices exercices={this.state.data.exercices}/>
            </View>
        );
    }
}