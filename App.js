// import React, { Component, useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View ,Switch} from 'react-native';

// const App = () => {

//   const [likes, setLikes] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);


//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <View style={[styles.container, darkMode && styles.darkContainer]}>
//       <Text style={[styles.text, darkMode && styles.darkText]}>Likes:{likes}</Text>

//       <TouchableOpacity style={styles.button} onPress={handleLike}>
//         <Text style={styles.buttonText}>❤️ Like</Text>
//       </TouchableOpacity>
//       <View style={styles.switchContainer}>
//         <Text style={[styles.textdarkmode, styles.darktextmode]}>Dark Mode</Text>
//         <Switch value={darkMode} onValueChange={toggleDarkMode} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#eaf2f8',
//   },
//   darkContainer: {
//     backgroundColor: '#222',
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 20,
//     color: '#333',
//   },
//   darkText: {
//     color: '#fff',
//   },
//   button: {
//     backgroundColor: '#007aff',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginBottom: 30,
//   },
//   buttonText:{
//     fontSize:16,
//     color:'#fff',
//   },

//   switchContainer:{
//     flexDirection:'row',
//     alignItems:'center',
//     gap:0,
//     backgroundColor:'#2f4f4f',
//     borderRadius:10,
//     height:50,
//     width:'80%',
//     justifyContent:'space-between',

//   },
//   darktextmode:{
//     color:'#fff',
//     paddingHorizontal:10, 
//   },
//   textdarkmode:{
//   fontSize:20,
//   }
// });


// export default App;





// import React, { Component, useState } from 'react';
// import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

// const App = () => {

// const [likes, setLikes] = useState(0);
// const [darkMode, setDarkMode] = useState(false);


// const toggleDarkMode = () => {
//   setDarkMode('!darkMode');
// };


// const handleLike = () => {
//   setLikes('likes + 1');
// };


//     return (
//       <View style={[styles.container, darkMode && styles.darkContainer]}>
//         <Text style={[styles.text, darkMode && styles.darkText]}>Likes:{likes}</Text>

//         <TouchableOpacity style={styles.button} onPress={handleLike}>
//         <Text style={styles.buttonText}>❤️ Like</Text>
//         </TouchableOpacity>

//         <View style={styles.SwitchContainer}>
//           <Text style={[styles.textdarkMode, styles.darkModeText]}>Dark Mode</Text>
//         <Switch value={darkMode} onValueChange={toggleDarkMode}/>
//         </View>
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container:{
//       flex:1,
//       justifyContent:'center',
//       alignItems:'center',
//     },
//     darkContainer:{
//       backgroundColor:'#222',
//     },
//     text:{
//       fontSize:16,
//       fontWeight:'600',
//     }
//   });
// export default App;












// import React from 'react';
// import { SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
// import UserCard from './components/UserCard';

// const App = () => {
// const users = [
//     {
//       name:"Hassan Ali",
//       role:"React Native Developer",
//       avatar:'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg',
//     },
//     {
//       name:"Usman Khan",
//       role:"Ui Designer",
//       avatar:'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg'
//     },

//    {
//       name:"Hassan Ali",
//       role:"React Native Developer",
//       avatar:'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg',
//     },
//     {
//       name:"Usman Khan",
//       role:"Ui Designer",
//       avatar:'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg'
//     },
//      {
//       name:"Hassan Ali",
//       role:"React Native Developer",
//       avatar:'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg',
//     },
//     {
//       name:"Usman Khan",
//       role:"Ui Designer",
//       avatar:'https://bernardmarr.com/wp-content/uploads/2022/04/The-10-Biggest-Technology-Trends-That-Will-Transform-The-Next-Decade.jpg'
//     }
// ];


//  return (
//       <SafeAreaView style={styles.safearea}>
//         <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//         {users.map((user, index) => (
//         <UserCard
//         key={index}
//         name={user.name}
//         role={user.role}
//         avatar={user.avatar}
//         />
//         ))}

//         </ScrollView>
//       </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//   safearea:{
// flex:1,

//   },
//      container:{
//       padding:20,
//       backgroundColor:'#eaeaea',
//      },
// });

// export default App;














// import React  from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return(
// <NavigationContainer>
//   <Stack.Navigator screenOptions={{headerShown:false}}>
//     <Stack.Screen name="Home" component={HomeScreen}/>
//     <Stack.Screen name="Profile" component={ProfileScreen}/>
//   </Stack.Navigator>
// </NavigationContainer>

//   )
// };


// export default App;








// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
