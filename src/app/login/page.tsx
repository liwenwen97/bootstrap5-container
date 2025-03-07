import React from 'react'
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

export default function Page() {
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    console.log('Login Success:', credentialResponse);
    // 在这里处理登录成功后的逻辑
  };

  const handleLoginFailure = () => {
    console.error('Login Failed');
    // 在这里处理登录失败后的逻辑
  };

  return (
    <div>
        <h1>Login</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
    </div>
  )
}
