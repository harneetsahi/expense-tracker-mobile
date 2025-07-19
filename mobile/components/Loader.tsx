import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from "@/assets/styles/home.styles";

const Loader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default Loader;
