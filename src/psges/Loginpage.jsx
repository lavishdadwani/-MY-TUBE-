import React from 'react'
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import config from "../config"
import { set_user } from '../redux/action/useraction';



const Loginpage = ({set_user,user}) => {
    
const responseGoogle = res =>{
   console.log(res)
    if(responseGoogle.error){console.error(res.error)};
    set_user({...res.profileObj,...res.tokenObj})
}
if(user){ return <Redirect to="/" />}

return (
        <div>
             <GoogleLogin
    clientId={config.CLIENT_ID}
    buttonText="LOGIN"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    scope="https://www.googleapis.com/auth/youtube"
    cookiePolicy={'single_host_origin'}/>
        </div>
    )
}


const mapstatestore = statestore=>{
    return{
      user:statestore.userstate.users
    }
  }

export default connect(mapstatestore,{set_user})(Loginpage)