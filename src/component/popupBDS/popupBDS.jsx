/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Modal from 'react-native-modal';
import styles from './popupBDS.styles';

function PopupBDS({modalVisible, setModalVisible, children, style, style2, fancy}) {
  const className = [styles.centeredView];
  const className2 = [styles.modalView];
  if (style) {
    className.push(style);
  }
  if (style2) {
    className2.push(style2);
  }

  return (
    <View>
      {fancy ? (
        <Modal
          customBackdrop={
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.modalContainer2} />
            </TouchableWithoutFeedback>
          }
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          onBackdropPress={() => {
            setModalVisible(false);
          }}
          isVisible={modalVisible}
        >
          <View style={className}>
            <View style={className2}>{children}</View>
          </View>
        </Modal>
      ) : (
        <Modal
          customBackdrop={
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <View style={styles.modalContainer} />
            </TouchableWithoutFeedback>
          }
          onBackdropPress={() => {
            setModalVisible(false);
          }}
          isVisible={modalVisible}
        >
          <View style={className}>
            <View style={className2}>{children}</View>
          </View>
        </Modal>
      )}
    </View>
  );
}

PopupBDS.propTypes = {
  modalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.any,
  style2: PropTypes.any,
};

PopupBDS.defaultProps = {
  modalVisible: false,
  setModalVisible: () => {},
  children: null,
  style: null,
  style2: null,
};

export default PopupBDS;
