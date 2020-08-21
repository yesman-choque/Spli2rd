import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import { 
	Poppins_500Medium, 
	Poppins_700Bold, 
	Poppins_800ExtraBold, 
	useFonts 
} from "@expo-google-fonts/poppins"


export default function App() {

	let [fontsLoaded] = useFonts({
		Poppins_500Medium,
		Poppins_700Bold,
		Poppins_800ExtraBold
	})

	if(!fontsLoaded) {
		return <AppLoading />
	} else {
		return (
	    <>
	      <Landing/>
	      <StatusBar style="light" />
	    </>
	  	);
	}
}


