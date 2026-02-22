import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

export const facebookLogin = async () => {
  try {
    // Start FB login
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw new Error('User cancelled login');
    }

    // Get access token
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw new Error('No access token found');
    }

    // Create firebase credential
    const facebookCredential =
      auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign in to Firebase
    // console.log(auth().signInWithCredential(facebookCredential))
    return auth().signInWithCredential(facebookCredential);

  } catch (error) {
    throw error;
  }
};