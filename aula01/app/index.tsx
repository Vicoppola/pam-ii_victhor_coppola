import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import EmojiSticker from '@/components/EmojiSticker';
import EmojiList from '@/components/EmojiList';
import EmojiPicker from "@/components/EmojiPicker";
import CircleButton from '@/components/CircleButton';
import IconButton from '@/components/IconButton';
import { useState, useRef } from 'react';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function App() {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  const imageRef = useRef();
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
         <View ref={imageRef} collapsable={false}>
          <ImageViewer
              placeholderImageSource={PlaceholderImage}
              selectedImage={selectedImage}
            />
            {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
          </View>
          {showAppOptions ? (
              <View style={styles.optionsContainer}>
                <View style={styles.optionsRow}>
                  <IconButton icon="refresh" label="Reset" onPress={onReset} />
                  <CircleButton onPress={onAddSticker} />
                  <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                </View>
              </View>
          ) : (
            <View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
              <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
            </View>
          )}
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
          </EmojiPicker>
          <StatusBar style="auto" />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
