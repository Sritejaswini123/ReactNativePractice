import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button,ImageBackground ,Image, Pressable , Modal} from 'react-native';
const logo = require("./assets/adaptive-icon.png")
//const dice = require("./assets/dice.png")
import { useState } from 'react';


export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSecondVisible, setIsSecondVisible ] = useState(false)
  const [isThirdVisible, setIsThirdVisble] = useState(false)
  return (

    <View style={styles.container}>
    <Text> LETS START ROCKING THE GIRL....!!!</Text>
    <Image  
    style= {styles.image} 
    source={logo}/>
      <Button 
      title='Press'
      onPress={()=> setIsModalVisible(true) // opens the first modal 
       
      }  />
      <Modal visible = {isModalVisible}>
        <View style = {styles.button}>
          <Text> MODAL CONTENT</Text>
          <Image style={styles.image} 
      source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}/>
          <Button 
          title='NEXT'
          onPress={() => { setIsModalVisible(false) // closes the first modal 
             setIsSecondVisible(true)// opens the second modal

          }} />
        </View>


        
      </Modal>
      <Modal visible = {isSecondVisible}>
        <View style = {styles.anotherbutton}>
          <Text>  INSIDE THE ANOTHER MODAL CONTENT</Text>
          <Image  
             style= {styles.image} 
           source={logo}/>
           <View style={styles.buttonContainer}>
            <Button
            title='GO BACK DUDE'
            onPress={() => {
              setIsSecondVisible(false)
              setIsModalVisible(true)
            }}
            />
           </View>
           <View style= {styles.buttonContainer}>
          <Button 
          title='CLICK NEXT'
          onPress={() => { 
            setIsSecondVisible(false)// closes the second  modal 
            setIsThirdVisble(true)// opens the third modal

          }} />
          </View>
        </View>
      </Modal>

      <Modal visible = {isThirdVisible}>
        <View style = {styles.anotherpage}>
          <Text>  HERE COMES THE NEW CONTENT</Text>
          <Image style={styles.image} 
      source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}/>
       <View style={styles.buttonContainer}>
         <Button
          title='GO BACK'
          onPress={()=>{
            setIsThirdVisble(false) // close the third modal
            setIsSecondVisible(true)// reopens the first modal
          }}
  
         />
         </View>
         <View style={styles.buttonContainer}>
          <Button 
          title='cLOSE'
          onPress={() => { setIsThirdVisble(false) // close the third modal completely
          }} />
        </View>
        </View>
      </Modal>
      <StatusBar backgroundColor='green' barStyle = 'light-content'  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60

  },
  image: {
    width: 200,
    height: 200,
   
 
  },
  button: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 60,
  },
  anotherbutton: {
    flex: 1,
    backgroundColor: 'darkgreen', 
    padding: 60,
  },
  anotherpage: {
    flex: 1,
    backgroundColor: 'grey', 
    padding: 60,
  },
  buttonContainer: {
    marginVertical: 10, // Adds space between the buttons
  }
});
