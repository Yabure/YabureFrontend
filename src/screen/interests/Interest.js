import React from 'react';
import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {interest} from '../../Redux/action/Interest';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
import DeviceInfo from 'react-native-device-info';


const Interest = () => {
  const interestData = useSelector(state => state.interest.data) || [];
  const interestValue = () => {
    interestData.map(data => {
      return data.field;
    });
  };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(interest());
  }, []);
  return (
    <View>
      <View>
        <Text style={styles.text}>
          This helps us to find you more relevant content{' '}
        </Text>
      </View>
      <View>
        <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
          <Text style={{fontSize: 22}}>Popular Movies</Text>
          <View style={{flex: 1, marginTop: 12}}>
            <FlatList
              data={interestValue}
              keyExtractor={item => item.id.toString()}
              renderItem={({item}) => {
                const IMAGE_URL =
                  'https://image.tmdb.org/t/p/w185' + item.poster_path;
                return (
                  <View style={{marginVertical: 12}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <View style={{flex: 1, marginLeft: 12}}>
                        <View>
                          <Text style={{fontSize: 22, paddingRight: 16}}>
                            {item}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    textAlign: 'center',
    top: 10,
  },
});
