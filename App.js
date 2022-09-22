import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import Dice1 from './assets/images/dice1.png';
import Dice2 from './assets/images/dice2.png';
import Dice3 from './assets/images/dice3.png';
import Dice4 from './assets/images/dice4.png';
import Dice5 from './assets/images/dice5.png';
import Dice6 from './assets/images/dice6.png';


const App = ()=>{
  const [uri,setUri] = useState(Dice1);
  const [uri2,setUri2] = useState(Dice1);
  const [score,setScore] = useState(0);
  const [score2,setScore2] = useState(0);
  const [counter,setCounter] = useState(1);

   console.log (score)
   console.log (score2)
   let totalScore = score+score2
  

  const buttonTapped = ()=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1
    let randomNumber2 = Math.floor(Math.random() * 6) + 1
    
    setScore(randomNumber+score)
    setScore2(randomNumber2+score2)

    switch(randomNumber){
      case 1: setUri(Dice1);
        break;
      case 2: setUri(Dice2);
        break;
      case 3: setUri(Dice3);
        break;
      case 4: setUri(Dice4);
        break;
      case 5: setUri(Dice5);
        break;
      case 6: setUri(Dice6);
       break;
      default: setUri(Dice1);
    }


    switch(randomNumber2){
      case 1: setUri2(Dice1);
        break;
      case 2: setUri2(Dice2);
        break;
      case 3: setUri2(Dice3);
        break;
      case 4: setUri2(Dice4);
        break;
      case 5: setUri2(Dice5);
        break;
      case 6: setUri2(Dice6);
       break;
      default: setUri2(Dice1);
    }


    counter===10 ? Alert.alert("Game Over") : setCounter(counter+1)

   if (counter === 10 && totalScore > 75 ){

    Alert.alert(
      'Roll The Dice',
      'You Win..',
      [
        {text: 'Ok', onPress: () => {setScore(0), setScore2(0), setCounter(0)}},
        
      ],
   
    );
          

   }

   else if (counter === 10 && totalScore< 75 )

   Alert.alert(
    'Roll The Dice',
    'You Lose..',
    [
      {text: 'Ok', onPress: () => {setScore(0), setScore2(0), setCounter(0)}},
      
    ],
 
  ); 
  
  }

  return(
    <View style={styles.container}>

       <Text style = {styles.score}> {score+score2} </Text> 
      <Image 
        style={styles.image} 
        source={uri}

        
      />


      <Image 
        style={styles.image} 
        source={uri2}
      />
      <TouchableOpacity onPress={buttonTapped}>
        <Text style={styles.texts}>Roll the Dice</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:200,
    height:200
  },
  texts:{
    fontSize:26,
    color:'blue',
    marginTop: 30,
    fontStyle: 'italic',
    paddingHorizontal: 10,
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold'
  },  
score:{
  color : 'red',
  fontSize : 20 ,
  marginBottom :10,
  fontWeight: 'bold'
}

});

export default App;