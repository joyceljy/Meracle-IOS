import React from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import GamePointTimeSeriesLineChart from '../containers/GamePointTimeSeriesLineChart_container';

const GamePointTimeSeriesLineChartScene = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage}>
               
                     <GamePointTimeSeriesLineChart />
               
            </Image>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
})

export default GamePointTimeSeriesLineChartScene;