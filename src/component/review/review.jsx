import React, {useState} from 'react';

import {View, Text, Dimensions, Image, TouchableOpacity, Linking, Platform } from 'react-native';
import styles from './review.styles';
import PopupBDS from '../../component/popupBDS';

const {height} = Dimensions.get('window');
const APP_STORE_LINK = `itms-apps://apps.apple.com/app/id1663487095?action=write-review`;
const PLAY_STORE_LINK = `market://details?id=com.ttdk`;

const STORE_LINK = Platform.select({
  ios: APP_STORE_LINK,
  android: PLAY_STORE_LINK,
});

function ModalReview(props) {
  const {modalVisible, setModalVisible, data} = props;
  const openLink = () => {
    Linking.openURL(STORE_LINK)
    setTimeout(() => {
      setModalVisible(!modalVisible)
    }, 500);
  }
  return (
    <View>
      <PopupBDS
        modalVisible={modalVisible}
        setModalVisible={() => {
          setModalVisible();
        }}
        style2={styles.modal}
      >
        <View style={{maxHeight: (height * 2) / 3}}>
          <Text style={styles.name}>Xin cảm ơn đã đồng hành cùng chúng tôi.</Text>
          <Text style={styles.description}>Chúng tôi rất mong được lắng nghe ý kiến đóng góp của bạn.</Text>
          <View style={styles.starContainer}>
            <Image
              style={styles.star}
              source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
            />
            <Image
              style={styles.star}
              source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
            />
            <Image
              style={styles.star}
              source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
            />
            <Image
              style={styles.star}
              source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
            />
            <Image
              style={styles.star}
              source={{ uri: 'https://img.icons8.com/color/40/000000/star.png' }}
            />
          </View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.rateButton} onPress={openLink}>
              <Text style={styles.rateButtonText}>Góp ý</Text>
            </TouchableOpacity>
          </View>
        </View>
      </PopupBDS>
    </View>
  );
}

export default ModalReview;
