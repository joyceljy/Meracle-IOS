import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Home from '../containers/home';

const HomeScene = () => {
    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default HomeScene;