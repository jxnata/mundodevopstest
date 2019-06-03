import { StyleSheet } from 'react-native';
import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const theme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'flex-start',
        paddingLeft: metrics.baseMargin,
        paddingRight: metrics.baseMargin,
    },
    header: {
        elevation: 0,
        backgroundColor: colors.primary,
        height: metrics.headerHeight,
        borderBottomWidth: 0,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: metrics.baseRadius,
    },
    headerTitle: {
        color: colors.light,
        fontFamily: 'Montserrat',
        fontSize: fonts.large,
        alignSelf: 'center',
        textAlign: 'center',
    },
    blockTitle: {
        color: colors.light,
        fontFamily: 'Montserrat-Bold',
        fontSize: fonts.regular,
    },
    subtitle: {
        color: colors.dark,
        fontFamily: 'Montserrat-Bold',
        fontSize: fonts.regular,
    },
    label: {
        fontFamily: 'Montserrat-Bold',
        fontSize: fonts.small,
        color: colors.label,
    },
    iconCheck: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: colors.light,
        borderWidth: 2,
        backgroundColor: colors.green,
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
    },
    iconLarge: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    thumbnail: {
        width: 30,
        height: 30,
    },
    iconDefault: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.roundRadius,
        backgroundColor: colors.primary,
        marginHorizontal: 7,
        marginVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    circleOverlay: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.roundRadius,
        backgroundColor: colors.primary,
    },
    btnHeader: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    labelItem: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 2,
        flexDirection: "row",
        alignItems: 'center',
        borderColor: colors.greyLight,
        borderWidth: 1,
        borderRadius: metrics.roundRadius,
    },
    labelToday: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 2,
        flexDirection: "row",
        alignItems: 'center',
        borderColor: colors.red,
        backgroundColor: colors.red,
        borderWidth: 1,
        borderRadius: metrics.roundRadius,
    },
    labelYesterday: {
        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 2,
        flexDirection: "row",
        alignItems: 'center',
        borderColor: colors.green,
        backgroundColor: colors.green,
        borderWidth: 1,
        borderRadius: metrics.roundRadius,
    },
    badgeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 7,
    },
    btnIcon: {
        width: 10,
        height: 10,
        alignSelf: 'center',
    },
    badgeText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: fonts.small,
        color: colors.light,
    },
    badgeSeparator: {
        fontFamily: 'Montserrat',
        fontSize: fonts.medium,
        color: colors.grey,
    },
    iconTabRound: {
        width: 60,
        height: 60,
        backgroundColor: colors.primary,
        borderRadius: metrics.roundRadius,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default theme;