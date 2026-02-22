import { GoogleSignin } from '@react-native-google-signin/google-signin';
export const configureGoogleSignin =()=>{

    GoogleSignin.configure({
      webClientId: '625345174311-54uduc6gaut7dd6ua624b9prc2bb90mj.apps.googleusercontent.com',
    });
}