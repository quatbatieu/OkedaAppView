import React, {useEffect} from 'react';
import {View, Button, Alert} from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import NotificationService from './NotificationService';

function App() {
  useEffect(() => {
    getFCMToken();
    requestPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      DisplayNotification(remoteMessage);
    });
    return unsubscribe;
  }, []);

  const getFCMToken = () => {
    messaging()
      .getToken()
      .then(token => {
      });
  };

  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
  };

  async function DisplayNotification(remoteMessage) {
    // Create a channel
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      },
    });
  }

  const sendNotification = async () => {
    let notificationData = {
      title: 'First Notification',
      body: 'Notification Body',
      token:
        'fydg6R-vR1aia7ThDjydnN:APA91bGVPeITgnag0bw7NkYZKbMLL-Ko9jFV77Z8VmbUf8asoQpX_LTCdRTZjg1gDsJLBM3L41slVzr1y7t9K7cA-ClDz0q_hhTrvYn_hn8_Y7YLIGWNGXZT_ZVqopAMl72FAygCLDpt',
    };
    await NotificationService.sendSingleDeviceNotification(notificationData);
  };

  const subscribeToTopic = () => {
    messaging()
      .subscribeToTopic('halohalo')
      .then(() => console.log('Subscribed to topic!'));
  };

  const unsubscribeToTopic = () => {
    messaging()
      .unsubscribeFromTopic('halohalo')
      .then(() => console.log('Unsubscribed fom the topic!'));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    </View>
  );
}

export default App;