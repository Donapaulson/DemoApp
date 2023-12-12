import React, { useState, useEffect } from "react";
import LoginForm from "../layouts/LoginFormPhone";
import { loginResults } from "../interfaces/loginResults";
import { useNavigation } from "@react-navigation/native";

export default function LoginWithPhone() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  async function onLogin(result: loginResults) {
    console.log("login results:" + JSON.stringify(result));
    // navigation.navigate("Create Profile");
  }

  const forgetPassword = () => {
    // navigation.navigate("ForgetPassword");
  };

  const navigateToEmailLogin = () => {
    // navigation.navigate("Login on Email");
  };

  const navigateToSignUp = () => {
    // navigation.navigate("Sign up");
  };

  return (
    <LoginForm
      onLogin={onLogin}
      navigateToEmailLogin={navigateToEmailLogin}
      navigateToSignUp={navigateToSignUp}
      onForget={forgetPassword}
      loading={loading}
    />
  );
}
