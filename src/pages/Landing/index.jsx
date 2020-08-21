import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard } from 'react-native';

import styles from './styles'





function Landing() {

    const [value, setValue] = React.useState('');
  
    var word = ""
    var textArray = value.split("");

    const wordArray = textArray.map(character => {
        character += " "
        return character.toUpperCase();
    })

    const copy = wordArray.map(character => {
        word += character
        return word
    })
      
    var copyIt = copy[copy.length - 1]



    return (
        <View style={styles.container}>

            <Text style={styles.logo}>
                Split
                <Text style={styles.num2}>2</Text>
                rd
            </Text>

            <Text style={styles.slogan}>
                The best spli
                <Text style={styles.two}>t wo</Text>
                rd
            </Text>

            <TextInput 
                style={styles.inputIn} 
                placeholder="Type a word"
                onChangeText={value => setValue(value)}
                value={value}
            />

            <Text style={styles.result}>Result</Text>

            <TextInput 
                style={styles.inputOut}
                value={copyIt?copyIt:""}
                placeholder="Waiting"
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={() => Clipboard.setString(copyIt)}
            >
                <Text style={styles.buttonText}>Copy</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Landing;