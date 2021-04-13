import React, { useCallback, useRef } from 'react'

import { KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native'

import Input from '../../components/Input'

import Yup from 'yup'

import Icon from 'react-native-vector-icons/Ionicons'
import IconLogo from 'react-native-vector-icons/FontAwesome'
    
import { useNavigation } from '@react-navigation/native'

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
        Container,
        BackToDashboardButton, 
        BackText,
        Border,
        Button,
        ButtonText,
        ScrollView,
        LogoView,
        TitleLogoText,
        EnterpriseText,
        NavigationContainer
        } from './styles'
import api from '../../services/api'

const AddMovimentation: React.FC = () => {
    const navigation = useNavigation()
    const formRef = useRef<FormHandles>(null);
    const nameRef = useRef<TextInput>(null);
    const valueRef = useRef<TextInput>(null);

    interface SignUpFormData {
        name: string;
        quantity: number;
        value: number;
      }

    const handleSubmit = useCallback(
        async (data: SignUpFormData) => {
          try {
            formRef.current?.setErrors({});
    
            await api.post('/stocks', data);
    
            navigation.goBack();
          } catch (err) {
            
          }
        },
        [navigation],
      );

    return (    
        <>
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
            <BackToDashboardButton onPress={() => navigation.goBack()}>
                <Icon name="chevron-back-sharp" size={18} color="#fff" />
                <BackText>Voltar</BackText>
            </BackToDashboardButton>
            <Border></Border>

            <Container>
            <LogoView>
                <IconLogo name="money" size={100} color="#fff" />
                <TitleLogoText>Luis Investimentos</TitleLogoText>
                <EnterpriseText>A company by Luis Enterprises</EnterpriseText>
            </LogoView>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input
                ref={nameRef}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Código da Ação"
                returnKeyType="next"
                onSubmitEditing={() => nameRef.current?.focus()}
              />

              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="decimal-pad"
                name="quantity"
                icon="mail"
                placeholder="Quantidade de Ação"
                returnKeyType="next"
                onSubmitEditing={() => valueRef.current?.focus()}
              />

              <Input
                ref={valueRef}
                keyboardType="decimal-pad"
                name="value"
                icon="lock"
                placeholder="Valor da Ação"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
        </Container>
        </ScrollView>
        </KeyboardAvoidingView>
        <NavigationContainer>
        <Button onPress={() => formRef.current?.submitForm()}>
                    <ButtonText>Adicionar</ButtonText>
              </Button>
        </NavigationContainer>
        </>
    )
}

export default AddMovimentation