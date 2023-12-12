import React, { useState } from "react";
import { AuthStack } from "./AuthStack";
import { AppStack } from "./HomeStack";

export default function MainNavigator() {
  const [token, setToken] = useState(null);

  return token ? <AppStack /> : <AuthStack />;
}
