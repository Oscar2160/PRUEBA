import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Torch from "react-native-torch";

const App = () => {
  const [flashOn, setFlashOn] = useState(false);

  const handleToggleFlash = async () => {
    try {
      await Torch.switchState(flashOn);
      setFlashOn(!flashOn);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={flashOn ? "Apagar Flash" : "Encender Flash"}
        onPress={handleToggleFlash}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
