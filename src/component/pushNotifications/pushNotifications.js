import React, { useEffect, useState } from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

function PushNotifications(props) {
  useEffect(() => {
    requestPermission() // For ios
	_openNotificationsForeAndBackgroundHandler();
	_openNotificationsAppClosed();
	handleMessageListener();
  }, []);

  const requestPermission = async () => {
    await messaging().requestPermission();
  };
  
  const handleMessageListener =()=> {
		this.messageListener = messaging().onMessage((message) => {
		})
	}
  /**
	 * Open Notification when App in Foreground and background
	 */
	const _openNotificationsForeAndBackgroundHandler = async () => {
		this.notificationOpenedListener = messaging().onNotificationOpenedApp((message) => {
		});
	}

  /**
	 * Open Notification when App Closed
	 */
  const _openNotificationsAppClosed = async () => {
		const message = await messaging().getInitialNotification();
		if (message) {
		}
	}

  return (
    <View>
    </View>
  );
}

export default PushNotifications;
