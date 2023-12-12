import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../../config/colors";

export function Timer() {
  const [minutes, setminutes] = useState(2);
  const [seconds, setseconds] = useState(30);
  const [startTimer, setStartTimer] = useState(true);

  useEffect(() => {
    let timeOut = null;
    if (startTimer) {
      timeOut = setTimeout(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setseconds(59);
            setminutes(minutes - 1);
          } else {
            if (seconds !== 0) {
              let lastSeconds = 59;
              setseconds(lastSeconds);
            }

            setminutes(minutes);
          }
        } else {
          setseconds(seconds - 1);
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [seconds]);

  return (
    <View>
      <Text style={styles.timeStyle}>
        {seconds > 9
          ? `Timer: ${minutes}:${seconds}`
          : `Timer: ${minutes}:0${seconds}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timeStyle: { fontSize: 20, color: colors.inactiveTextColor },
});
