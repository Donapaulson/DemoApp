import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";
import {styles} from './styles';

interface SpinnerProps {
    loading: boolean;
    children?: any
}

export const FullScreenActivityIndicator:React.FC<SpinnerProps> = ({ loading, children }) => {
  return (
    <View style={styles.container}>
      {children}
      {loading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            styles.viewContainer,
          ]}
        >
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}