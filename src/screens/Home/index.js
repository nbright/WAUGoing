import React, {useState, useRef} from 'react';

import {
  View,
  Text,
  Animated,
  Pressable,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Portal } from 'react-native-portalize';
import { Layout } from '../../components/layout/Layout';
import { Header } from '../../components/header/Header';
import { Button } from '../../components/button/Button';
import { FixedContent } from '../../components/modals/FixedContent';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
//import DateTimePicker from '@react-native-community/datetimepicker';
import WeekView, {createFixedWeekDate} from 'react-native-week-view';

const generateDates = (hours, minutes) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);
  if (minutes != null) {
    date.setMinutes(minutes);
  }
  return date;
};
const generateDetailDate = (pickDate, hours, minutes) => {
  const date = pickDate;
  date.setHours(date.getHours() + hours);
  if (minutes != null) {
    date.setMinutes(minutes);
  }
  return date;
};

const sampleEvents = [
  {
    id: 1,
    description: 'Event 1',
    startDate: generateDates(0),
    endDate: generateDates(2),
    color: 'blue',
  },
  {
    id: 2,
    description: 'Event 2',
    startDate: generateDates(1),
    endDate: generateDates(4),
    color: 'red',
  },
  {
    id: 3,
    description: 'Event 3',
    startDate: generateDates(-5),
    endDate: generateDates(-3),
    color: 'green',
  },
];

const sampleFixedEvents = [
  {
    id: 1,
    description: 'Event 1',
    startDate: createFixedWeekDate('Monday', 12),
    endDate: createFixedWeekDate(1, 14),
    color: 'blue',
  },
  {
    id: 2,
    description: 'Event 2',
    startDate: createFixedWeekDate('wed', 16),
    endDate: createFixedWeekDate(3, 17, 30),
    color: 'red',
  },
];

// For debugging purposes
const showFixedComponent = true;

const MyRefreshComponent = ({style}) => (
  // Just an example
  <ActivityIndicator style={style} color="red" size="large" />
);
const HomeScreen = () => {
  const [isReceived, setIsReceived] = useState(false);
  const navigation = useNavigation();
  const [selectDate, setSelectDate] = useState(new Date(Date.now()));
  const [weekEvents, setEvents] = useState(sampleEvents);
  
  const [sDate, setSDate] = useState(null);
  const [eDate, setEDate] = useState(null);
  const [eid, setEid] = useState(10);
  const onEventPress = ({id, color, startDate, endDate}) => {
    modals[0].open()
  };

  const onGridClick = (event, startHour, date) => {
    
    console.log(date);
    if (sDate == null) {

      setSDate(generateDetailDate(date,startHour));
      console.log("start ok!");
      return; 
    }
    else
    {
      
      console.log("end ok!");
      setEid(eid + 1);
      console.log("eid :" + eid);
      const newEvent = 
        {
          id: eid,
          description: 'Event 1',
          startDate:sDate,
          endDate: generateDetailDate(date,startHour),
          color: 'blue',
        }
      
      setEvents([...weekEvents, newEvent]);
      console.log(weekEvents);
      setSDate(null);
      setEDate(null);

      modals[0].open()
    }
    
    //setSDate(null);
    //setEDate(null);
    //const dateStr = date.toISOString().split('T')[0];
    //console.log(`Date: ${dateStr}\nStart hour: ${startHour}`);
  };
  const MyTodayComponent = ({formattedDate, textStyle}) => (
    <Text style={[textStyle, {fontWeight: 'bold'}]}>{formattedDate}</Text>
  );
  const modals = Array.from({ length: 1 }).map(_ => useRef(null).current);
  const animated = useRef(new Animated.Value(0)).current;

  const renderButtons = links => {
    return links.map((link, i) => <Button key={i} onPress={() => modals[i].open()} name={link} />);
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <WeekView
            events={weekEvents}
            selectedDate={new Date()}
            numberOfDays={7}
            onEventPress={onEventPress}
            onGridClick={onGridClick}
            headerStyle={styles.header}
            headerTextStyle={styles.headerText}
            hourTextStyle={styles.hourText}
            eventContainerStyle={styles.eventContainer}
            formatDateHeader={showFixedComponent ? 'ddd' : 'ddd DD'}
            hoursInDisplay={16}
            timeStep={60}
            startHour={7}
            fixedHorizontally={showFixedComponent}
            showTitle={!showFixedComponent}
            showNowLine
            isRefreshing={true}
            RefreshComponent={MyRefreshComponent}
            TodayHeaderComponent={MyTodayComponent}
          />
           <FixedContent ref={el => (modals[0] = el)} />
          
    </SafeAreaView>
    </>
  );
};

export default HomeScreen;
