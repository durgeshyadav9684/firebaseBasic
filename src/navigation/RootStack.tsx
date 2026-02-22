import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

export default function RootStack() {
  const { user, loading } = useAuth();

  if (loading) return <ActivityIndicator size="large" />;

  return user ? <MainStack /> : <AuthStack />;
}