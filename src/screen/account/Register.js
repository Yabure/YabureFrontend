import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import DeviceInfo from 'react-native-device-info';
import {Input, Icon} from '@ui-kitten/components';
import Orientation from 'react-native-orientation-locker';
import FormButton from '../../component/FormButton';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return {value, onChangeText: setValue};
};

const Register = () => {
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
      <View style={styles.header}>
        <Text style={styles.headerText}>SIGN UP</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="First Name"
          style={styles.boder}
          {...smallInputState}
        />
      </View>
      <View style={styles.inputContainerTwo}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Last Name"
          style={styles.boder}
          {...smallInputState}
        />
      </View>
      <View style={{top: DeviceInfo.isTablet() ? 54 : 40}}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Email"
          style={styles.boder}
          {...smallInputState}
        />
      </View>
      <View style={styles.inputContainerThree}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Phone No."
          style={styles.boder}
          {...smallInputState}
        />
      </View>
      <View style={styles.inputContainerFour}>
        <Input
          size={DeviceInfo.isTablet() ? 'large' : 'medium'}
          textStyle={styles.input}
          placeholder="Password"
          style={styles.boder}
          {...smallInputState}
        />
      </View>

      <View style={styles.buttonContainer}>
        <FormButton buttonTitle="Sign up" />
      </View>
      <View style={styles.lastContainer}>
        <View>
          <Text>Already have an account? </Text>
        </View>

        <TouchableOpacity>
          <Text styles={styles.text}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: windowHeight / 13,
    width: DeviceInfo.isTablet() ? 800 : 350,
    left: 27,
  },
  inputContainer: {
    top: windowHeight / 40,
  },
  header: {
    top: windowHeight / 120,
    left: '40%',
  },
  headerText: {
    fontSize: DeviceInfo.isTablet() ? 60 : 17,
  },
  inputContainerTwo: {
    top: DeviceInfo.isTablet() ? 44 : 30,
  },
  inputContainerThree: {
    top: DeviceInfo.isTablet() ? 64 : 50,
  },
  inputContainerFour: {
    top: DeviceInfo.isTablet() ? 74 : 65,
  },
  boder: {
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonContainer: {
    top: DeviceInfo.isTablet() ? 74 : 66,
    right: 10,
  },
  lastContainer: {
    flexDirection: 'row',
    top: 110,
    textAlign: 'center',
    left: DeviceInfo.isTablet() ? 254 : 50,
  },
  text: {
    color: 'rgba(112, 108, 97, 0.9)',
    fontWeight: 'normal',
    fontFamily: 'Poppins-Medium',
  },
});

export default Register;
