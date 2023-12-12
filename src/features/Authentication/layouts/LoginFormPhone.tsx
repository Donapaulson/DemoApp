import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Switch,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import { Timer } from "../components/Timer";
// import { phoneLoginValidationSchema } from "../validations/phoneLoginValidationSchema";
// import { FaceIdAuthentication } from "../screens/FaceIdAuthentication";
import { colors } from "../../../config/colors";
import {
  Button,
  DismissKeyboard,
  FloatingTitleTextInput,
  IconButton,
  KeyboardAware,
  Statusbar,
  TextButton,
} from "../../../components";
import { styles } from "../styles/LoginStyle";

function LoginForm(props: any) {
  // const [loading, setLoading] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Statusbar />

        <View style={styles.container}>
          <KeyboardAware
            style={styles.keyboardHideStyle}
            styleDuringKeyboardShown={styles.onkeyboardStyle}
          >
            <View style={styles.logoContainer}>
              <Image
                source={require("../../../assets/logoWithName.png")}
                style={styles.logo}
              />
            </View>
          </KeyboardAware>
          <View style={styles.inputContainer}>
            <Formik
              // validationSchema={phoneLoginValidationSchema}
              initialValues={{ phone: "", code: "" }}
              onSubmit={(values) => {
                if (phoneVerified) {
                  props.onLogin(values);
                } else {
                  if (values.phone) {
                    setPhoneVerified(true);
                  }
                }
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
                validateOnBlur,
                validateField,
              }) => (
                <>
                  {!phoneVerified && (
                    <>
                      <FloatingTitleTextInput
                        title="Phone"
                        onTextupdate={handleChange("phone")}
                        keyboardType={"phone-pad"}
                      />
                      {errors.phone && (
                        <Text style={{ color: "red" }}>{errors.phone}</Text>
                      )}
                      <Button
                        title={"Send Code"}
                        onPress={handleSubmit as any}
                        buttonColor={
                          values.phone ? colors.primaryBright : colors.gray
                        }
                        textColor={
                          values.phone ? colors.white : colors.inactiveGray
                        }
                      />
                    </>
                  )}
                  {phoneVerified && (
                    <>
                      <Text style={styles.sendText}>Send to :</Text>

                      <View style={styles.phoneTitleContainer}>
                        <Text style={styles.confirmDataStyle}>
                          {values.phone}
                        </Text>
                        <Timer />
                      </View>

                      <FloatingTitleTextInput
                        title="Enter code"
                        onTextupdate={handleChange("code")}
                        keyboardType={"phone-pad"}
                      />
                      {errors.code && (
                        <Text style={{ color: "red" }}>{errors.code}</Text>
                      )}
                      <Pressable
                        style={styles.forgetPasswordContainer}
                        onPress={props.onForget}
                      >
                        <Text style={styles.forgetPassword}>Resend code</Text>
                      </Pressable>
                      <Button
                        title={"Verify"}
                        onPress={handleSubmit as any}
                        buttonColor={
                          values.code ? colors.primaryBright : colors.gray
                        }
                        textColor={
                          values.code ? colors.white : colors.inactiveGray
                        }
                      />
                    </>
                  )}
                  {/* <FaceIdAuthentication /> */}
                  <Text style={styles.smallText}>Or Login</Text>
                  <TextButton
                    onPress={props.navigateToEmailLogin}
                    title={"Login on Email"}
                  />
                  <IconButton />
                  {!phoneVerified && (
                    <TextButton
                      title={"Create an account"}
                      onPress={props.navigateToSignUp}
                    />
                  )}
                </>
              )}
            </Formik>
          </View>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

export default LoginForm;
