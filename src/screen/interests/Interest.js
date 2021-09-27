import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {interest} from '../../Redux/action/Interest';
import DeviceInfo from 'react-native-device-info';
import {windowHeight, windowWidth} from '../../utils/Dimension';
import FormButton from '../../component/FormButton';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.field}</Text>
  </TouchableOpacity>
);

const Interest = () => {
  const interestData = useSelector(state => state.interest.interest);
  const [interestField, setInterestField] = React.useState([]);
  const windowWidth = useWindowDimensions().width;

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(interest());
  }, [dispatch, interest]);

  React.useEffect(() => {
    setInterestField(interestData);
  }, [interestData, interestField]);

  const selectItem = data => {
    data.selected = !data.selected;
    data.selected ? 'green' : 'yellow';

    const index = interestData.findIndex(item => data.id === item);

    interestData[index] = data.item;

    setInterestField(interestData[index]);
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.selected ? '#302675' : 'white';
    const color = item.selected ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => selectItem(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          This helps us to find you more relevant content{' '}
        </Text>
      </View>
      <View style={styles.interestField}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-between'}}
          data={interestField}
          renderItem={item => renderItem(item)}
          numColumns={2}
          extraData={interestField}
          horizontal={false}
        />
      </View>
      <View style={styles.button}>
        <FormButton buttonTitle='Next' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: windowHeight / 14,
    width: windowWidth / 0.9,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    top: 10,
  },
  interestField: {
    top: 50,
    alignItems: 'center', //
    justifyContent: 'center',
    position: 'absolute',
  },
  item: {
    // marginTop: 10,
    width: '38%',
    // left: 10,
    height: windowHeight / 17,
    backgroundColor: '#302675',
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#C4C4C4',
    borderWidth: 1,
    padding: 2,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  lightText: {
    color: '#f7f7f7',
    width: 200,
    paddingLeft: 15,
    fontSize: 12,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  numberBox: {
    position: 'absolute',
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {fontSize: 14, color: '#000'},
  selected: {backgroundColor: '#FA7B5F'},
});

export default Interest;
