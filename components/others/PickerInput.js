import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

const PickerInput = ({
  banks,
  onValueChange,
  selectedValue,
  pickerStyle
}) => {
  return (
      <View>
        <Picker 
          selectedValue = {selectedValue} 
          onValueChange = {onValueChange}
          style={pickerStyle}
        >
          {banks.map((data) => {
            return (
              <Picker.Item label = {data.label} value = {data.value} key={data.value} />
            )
          })}
        </Picker>
      </View>
  );
}

export default PickerInput;