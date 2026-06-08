import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  //const navigation = useNavigation();
  return (
    <View>
      <Text>homeScreen</Text>
      <Button title='Ir para profile' onPress={()=>{
        navigation.navigate('Profile');
      }}/>
      <Button title='Ir para About' onPress={()=>{
        navigation.navigate('About');
      }}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})