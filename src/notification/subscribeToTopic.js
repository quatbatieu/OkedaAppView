import messaging from "@react-native-firebase/messaging";

export const subscribeToTopic = (id) => {
	const APPUSER = "USER_" + id;
	messaging()
		.subscribeToTopic(APPUSER)
		.then((response) => {});
};

export const unSubscribeTopic = async (topic) => {
	if (topic) {
		await messaging().subscribeToTopic(topic);
	}
};

export const subscribeToTopicGeneral = () => {
	const GENERAL = "GENERAL";
	messaging()
		.subscribeToTopic(GENERAL)
		.then((response) => {});
};

export async function requestUserPermission() {
	const authStatus = await messaging().requestPermission();
	const enabled =
		authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
		authStatus === messaging.AuthorizationStatus.PROVISIONAL;

	if (enabled) {
	}
}

export const checkNotification = () => {
	if (requestUserPermission()) {
		// return fcm token for the device
		messaging()
			.getToken()
			.then((token) => {});
	} else {
	}

	// Check whether an initial notification is available
	messaging()
		.getInitialNotification()
		.then(async (remoteMessage) => {
			if (remoteMessage) {
			}
		});

	// Assume a message-notification contains a "type" property in the data payload of the screen to open

	messaging().onNotificationOpenedApp(async (remoteMessage) => {});

	// Register background handler
	messaging().setBackgroundMessageHandler(async (remoteMessage) => {});

	const unsubscribe = messaging().onMessage(async (remoteMessage) => {
		const data = remoteMessage;
		PushNotificationIOS.presentLocalNotification({
			alertTitle: data.notification.title,
			alertBody: data.notification.body,
		});
	});

	return unsubscribe;
};
