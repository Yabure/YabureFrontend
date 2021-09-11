import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Input, Icon} from '@ui-kitten/components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FormButton from '../../component/FormButton';
import DeviceInfo from 'react-native-device-info';
import Orientation from 'react-native-orientation-locker';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

const Login = () => {
  React.useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const smallInputState = useInputState();
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>SIGN IN</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Input
            size={DeviceInfo.isTablet() ? 'large' : 'medium'}
            textStyle={styles.input}
            placeholder="Email"
            style={styles.boder}
            {...smallInputState}
          />
        </View>

        <View style={{top: 30}}>
          <Input
            size={DeviceInfo.isTablet() ? 'large' : 'medium'}
            textStyle={styles.inputTwo}
            placeholder="Password"
            caption={renderCaption}
            accessoryRight={renderIcon}
            secureTextEntry={secureTextEntry}
            style={styles.boder}
            {...smallInputState}
          />
        </View>
      </View>
      <View style={styles.button}>
        <FormButton buttonTitle="Sign In" />

        <View style={styles.lastContainer}>
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'center',
                left: 100,
                color: '#302675',
                fontSize: DeviceInfo.isTablet() ? 30 : 18,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', left: 100, top: 5}}>
            <View>
              <Text style={{fontSize: DeviceInfo.isTablet() ? 23 : 12, top: 3}}>
                Don’t have an account?{' '}
              </Text>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#302675',
                  fontSize: DeviceInfo.isTablet() ? 23 : 12,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    top: 100,
  },
  input: {
    marginVertical: 2,
    borderColor: 'black',
    width: DeviceInfo.isTablet() ? 50 : 30,
    height: DeviceInfo.isTablet() ? 40 : 37,
    fontSize: DeviceInfo.isTablet() ? 30 : 17,
    alignSelf: 'center',
    // borderWidth:1
  },
  inputTwo: {
    marginVertical: 2,
    borderColor: 'black',
    width: DeviceInfo.isTablet() ? 50 : 3,
    height: DeviceInfo.isTablet() ? 40 : 37,
    fontSize: DeviceInfo.isTablet() ? 30 : 17,
    alignSelf: 'center',
  },
  inputContainer: {
    //   flexDirection:'column',
    //   justifyContent:'space-between',
    width: '80%',
    justifyContent: 'center',
    top: hp(33),
    alignSelf: 'center',
  },

  text: {
    textAlign: 'center',
    top: hp(13),
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: hp('48%'),
    width: '80%',
    left: DeviceInfo.isTablet() ? hp(7) : hp(4),
    alignSelf: 'center',
  },
  lastContainer: {
    flexDirection: 'column',
    top: hp('12%'),
    position: 'absolute',
    left: DeviceInfo.isTablet() ? hp(10) : hp(-3),
  },
  boder: {
    borderColor: 'black',
    borderWidth: 1,
  },
});
