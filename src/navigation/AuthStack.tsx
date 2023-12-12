import { createStackNavigator } from "@react-navigation/stack";
import Login from "../features/Authentication/screens/LoginWithPhone";
import SignInOptions from "../features/Authentication/screens/SignInOptions";
import { AppRootParamList } from "../interfaces/AppRootParamList";
import { colors } from "../config/colors";

const Stack = createStackNavigator<AppRootParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInOptions"
        component={SignInOptions}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login on Phone"
        component={Login}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: colors.black,
        }}
      />
    </Stack.Navigator>
  );
};

export { AuthStack };
