export type AppRootParamList = {
  navigate(arg0: string, arg1?: any): unknown;
  setOptions(arg0: { headerTitle: string }): unknown;
  "Login on Phone": undefined;
  SignInOptions: undefined;
  Home: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
