import React from 'react';
import {View, Text, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
  return (
    <Onboarding
      pages={[
        {
          titleStyles: {
            fontFamily: 'Poppins-ExtraBold',
            fontWeight: '600',
          },
          subTitleStyles: {
            fontFamily: 'Inter-Medium',
            fontWeight: '800',
            textTransform: 'uppercase',
            color: '#555145',
            opacity: 0.9,
          },
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/images/OpenDoodles.png')} />
          ),
          title: 'Your Books organizer',
          subtitle:
            'ARRANGE ALL YOUR NOTES INTO ONE EASY TO READ OFFLINE LIBRARY',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/images/OpenDoodles.png')} />
          ),
          title: 'Control your studying',
          subtitle:
            'Choose when you study and choose the books you need to study anytime you want.',
        },

        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../assets/images/OpenDoodles2.png')} />
          ),
          title: 'Limitless Access To Books',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
