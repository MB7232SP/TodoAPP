import { GoogleOAuthProvider,GoogleLogin,useGoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export const Googlelogin = ()=>{
    return (<div>
      <GoogleOAuthProvider clientId="680265697946-10u0l0eiv387ki9l10vnm21m3e3au0l2.apps.googleusercontent.com">
        
   <GoogleLogin
      onSuccess={credentialResponse => {
       console.log(jwt_decode (credentialResponse.credential));
      }}
     onError={() => {
      console.log('Login Failed');
     }}
   />

        </GoogleOAuthProvider>
       
    </div>)
}