import React from "react";
import SignInOptionsForm from "../layouts/SignInOptionsForm";
import { useNavigation } from "@react-navigation/native";

export default function SignInOptions() {
  const navigation = useNavigation();

  const onSelect = (index: number) => {
    console.log("selected option:" + index);
    switch (index) {
      case 1:
        console.log("scan id");
        break;
      case 2:
        navigation.navigate("Login on Phone");
        break;
      default:
        console.log("default");
        break;
    }
  };
  return <SignInOptionsForm onSelect={onSelect} />;
}
