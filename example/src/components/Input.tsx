import React from 'react';
import { styles } from '../styles';
import { Input as RNInput } from 'react-native-elements';

interface InputProps {
  onChangeText: (text: string) => void;
  label: string;
  value: string;
  keyboardType?: 'default' | 'numeric';
  placeholder?: string;
}

export function Input({
  onChangeText,
  value,
  label,
  keyboardType = 'default',
  placeholder,
}: InputProps) {
  return (
    <RNInput
      value={value}
      containerStyle={styles.inputContainer}
      inputStyle={styles.input}
      label={label}
      autoCompleteType={undefined}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
}
