import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Reactotron from 'reactotron-react-native';

console.tron = Reactotron
.configure({host: '192.168.0.117'})
.useReactNative()
.connect()

AppRegistry.registerComponent(appName, () => App);
