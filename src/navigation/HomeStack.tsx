import { createStackNavigator } from "@react-navigation/stack";
import { AppRootParamList } from "../interfaces/AppRootParamList";
import LoginWithPhone from "../features/Authentication/screens/LoginWithPhone";

const Stack = createStackNavigator<AppRootParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={LoginWithPhone}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
