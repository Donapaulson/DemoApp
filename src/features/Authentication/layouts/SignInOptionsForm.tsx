import { Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import SignInstyles from "../styles/SignInStyles";
import OptionItem from "../components/OptionItem";

export default function SignInOptionsForm({ onSelect }) {
  return (
    <SafeAreaView style={SignInstyles.container}>
      <View style={SignInstyles.logoContainer}>
        <Image
          source={require("../../../assets/logoWithName.png")}
          style={SignInstyles.logo}
        />
      </View>
      <View style={SignInstyles.textContainer}>
        <Text style={SignInstyles.text}>How do you</Text>
        <Text style={SignInstyles.text}>want to create</Text>
        <Text style={SignInstyles.text}>an account?</Text>
      </View>
      <View style={SignInstyles.optionViewContainer}>
        <View style={SignInstyles.optionContainer}>
          <OptionItem
            index={1}
            titleText={"Scan \n ID"}
            imagepath={require("../../../assets/id-card.png")}
            onSelect={onSelect}
          />
        </View>
        <View style={SignInstyles.smallTextContainer}>
          <Text style={SignInstyles.smallText}>Or</Text>
        </View>
        <View style={SignInstyles.optionContainer}>
          <OptionItem
            index={2}
            titleText={"Type \n Everything"}
            imagepath={require("../../../assets/settings.png")}
            onSelect={onSelect}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
