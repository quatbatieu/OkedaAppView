import { useNetInfo } from "@react-native-community/netinfo";
import React, { useEffect, useState } from "react";
import {
	Platform,
	SafeAreaView,
	Text,
	View
} from "react-native";
import { WebView } from "react-native-webview";
import { LINK } from "../../common/constant";
import ModalReview from "../../component/review";
import styles from "./webViewScreen.styles";
// import IMEI from "react-native-imei";

function WebViewScreen() {
	const [checkNetwork, setCheckNetwork] = useState(true);
	const [modalReview, setModalReview] = useState(false);
	const netInfo = useNetInfo();

	//Network
	useEffect(() => {
		checkNetworkConnectionChange();
	}, [netInfo.isConnected]);

	const checkNetworkConnectionChange = () => {
		setCheckNetwork(netInfo.isConnected);
	};
	const CheckNetworkTab = () => {
		return (
			<View style={styles.networkContainer}>
				<Text style={styles.networkTitle}>
					Vui lòng mở internet để tiếp tục sử dụng ứng dụng...
				</Text>
			</View>
		);
	};

	return (
		<>
			<SafeAreaView style={styles.container}>
				{(checkNetwork === true || checkNetwork === null) ? <WebViewTab /> : <CheckNetworkTab />}
			</SafeAreaView>
			<ModalReview modalVisible={modalReview} setModalVisible={setModalReview} />
		</>
	);
}

const WebViewTab = () => {
	const customUserAgent = Platform.select({
		ios: 'webview_game_iOS',
		android: 'webview_game_Android',
		default: 'webview_game'
	});

	return (
		<View style={styles.container}>
			<WebView 
			source={{ uri: LINK }}
			userAgent={customUserAgent}
			onLoad={console.log('Loading...')}
			/>
		</View>
	)
}
export default WebViewScreen;
