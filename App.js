import React, { useState } from 'react';
import {
  Button,
  Box,
  Input,
  Stack,
  Icon,
  Pressable,
  NativeBaseProvider,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from 'native-base';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Image } from 'native-base';
import logo from './assets/logo.png';

const Example = () => {
  const [show, setShow] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      flex={1}
      bg=" #202024"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Stack
          flex={1}
          space={4}
          w="100%"
          alignItems="center"
          justifyContent="center"
          paddingY={8}
        >
          <Image
            marginTop="80px"
            source={logo}
            alt="Logo"
            style={{ width: 150, height: 150 }}
          />
          <Text bold fontSize="20px" style={{ color: '#ffffff' }}>
            Acesse sua conta
          </Text>

          <Input
            fontSize="15px"
            color="white"
            borderColor="transparent"
            marginTop="70px"
            bg="#121214"
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Email"
          />
          <Input
            color="white"
            fontSize="15px"
            borderColor="transparent"
            bg="#121214"
            w={{
              base: '75%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="vpn-key" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Password"
            type={show ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
          />

          <Box width="75%" marginTop="30px">
            <Button
              height="27%"
              onPress={() => console.log('hello world')}
              bg="#E51C44"
              size="md"
            >
              Entrar
            </Button>
          </Box>
        </Stack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <Example />
    </NativeBaseProvider>
  );
}
