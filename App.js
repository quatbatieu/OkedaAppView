import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppNavigation from "./src/navigation";
import reactNativeSplashScreen from "react-native-splash-screen";

const App = () => {
	useEffect(() => {
		reactNativeSplashScreen.hide();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<AppNavigation />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default App;
