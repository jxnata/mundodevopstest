import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
    smallMargin: 5,
    baseMargin: 20,
    largeMargin: 25,
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    tabBarHeight: 54,
    navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
    statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
    headerHeight: (Platform.OS === 'ios') ? 55 : 45,
    baseRadius: 15,
    mediumRadius: 20,
    roundRadius: 50,
    hitSlopLike: {top: 20, bottom: 20, left: 20, right: 20},
};

export default metrics;