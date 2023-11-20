import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import ClientId from "../GitHide/ClientId";
import serverUrl from "../GitHide/ServerUrl";
const GoogleSignUp = () => {
  const clientId = ClientId;
  const SERVERURL = serverUrl;

  const onSuccess = async (response) => {
    console.log(response);

    try {
      axios.post(
        SERVERURL,
        {
          idToken: `${response.credential}`,
        },
        {
          headers: null,
        },
      );

      console.log("POST Complete");
    } catch (error) {
      console.log("POST Failed", error);
    }
  };

  return (
    <div className="GoogleSignUpWrap">
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => {
            console.log("Post Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleSignUp;
