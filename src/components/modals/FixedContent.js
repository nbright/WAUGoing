import React, { useRef, forwardRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { useCombinedRefs } from '../../utils/use-combined-refs';

export const FixedContent = forwardRef((props, ref) => {
  console.log(props);
  const modalizeRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const [toggle, setToggle] = useState(true);

  const handleClose = () => {
    if (combinedRef.current) {
      combinedRef.current.close();
    }
  };
  const renderContent = () => (
    <View style={s.content}>
      <Text style={s.content__subheading}>{'예약 정보'}</Text>
      <Text style={s.content__heading}>Send the message?</Text>
      <TouchableOpacity
        style={s.content__description}
        activeOpacity={0.75}
        onPress={() => setToggle(!toggle)}
      >
        <Text>adjustToContentHeight {JSON.stringify(toggle)}</Text>
      </TouchableOpacity>
      <TextInput
        style={s.content__input}
        placeholder="전화번호"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={s.content__input}
        placeholder="예약자"
        clearButtonMode="while-editing"
      />
      <TextInput
        style={s.content__input}
        placeholder="예약내용"
        clearButtonMode="while-editing"
      />

      <TouchableOpacity style={s.content__button} activeOpacity={0.75} onPress={handleClose}>
        <Text style={s.content__buttonText}>{'확인'.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <Modalize ref={combinedRef} adjustToContentHeight={toggle}>
      {renderContent()}
    </Modalize>
  );
});

const s = StyleSheet.create({
  content: {
    padding: 20,
  },

  content__icon: {
    width: 32,
    height: 32,

    marginBottom: 20,
  },

  content__subheading: {
    marginBottom: 2,

    fontSize: 16,
    fontWeight: '600',
    color: '#ccc',
  },

  content__heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  content__description: {
    paddingTop: 10,
    paddingBottom: 10,

    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 20,

    width: '100%',

    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#cdcdcd',
    borderRadius: 6,
  },

  content__button: {
    paddingVertical: 15,

    width: '100%',

    backgroundColor: '#333',
    borderRadius: 6,
  },

  content__buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
