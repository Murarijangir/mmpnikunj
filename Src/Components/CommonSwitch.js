
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';

const CommonSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            
                <Switch
                    style={{ color: 'red' }}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    disabled={false}
                    activeText={''}
                    inActiveText={''}
                    circleSize={20}
                    circleBorderActiveColor={'#27AF35'}
                    circleBorderInactiveColor={'#F44336'}
                    circleBorderWidth={1}
                    backgroundActive={'#FFFFFF'}
                    backgroundInactive={'#FFFFFF'}
                    circleActiveColor={'#27AF35'}
                    circleInActiveColor={'#F44336'}
                    changeValueImmediately={true} 
                    innerCircleStyle={{   }} 
                    outerCircleStyle={{}}
                    border
                    switchLeftPx={3} 
                    switchRightPx={3} 
                    switchWidthMultiplier={2} 
                    switchBorderRadius={20}
                    
                    switchBorderWidth={5}
                    sw
                />
            
        </View>
    );
};
export default CommonSwitch
const styles = StyleSheet.create({
    container: {
        marginRight:20
       
    },
});