import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(u => {
      setUser(u);
      setLoading(false);
    });

    return subscriber;
  }, []);

  return { user, loading };
};