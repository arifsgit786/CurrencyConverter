import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name : string;
    flag: string;

}>


const CurrencyButton = (props : CurrencyButtonProps):React.JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag:{
        fontSize:28,
        color: 'white',
        marginBottom:4
    },
    name:{
        fontSize: 14,
        color: 'black'
    }

})

export default CurrencyButton