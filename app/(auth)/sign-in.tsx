import { View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>Sign In</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
      <Redirect href="/(tabs)" />
    </SafeAreaView>
  )
}

export default SignIn