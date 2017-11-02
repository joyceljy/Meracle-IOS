import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import EditPassword from '../containers/EditPassword_container';

const EditPasswordScene = () => {
 return (
        <View style={styles.container}>
               
                     <EditPassword />
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    
})
export default EditPasswordScene;