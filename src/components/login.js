import React from 'react'
import DirectWebSdk from '@toruslabs/torus-direct-web-sdk'

const torus = new DirectWebSdk({
  baseUrl: 'http://localhost:8000/serviceworker/',
  // proxyContractAddress: '0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183', // details for test net
  // network: 'ropsten', // details for test net,
  enableLogging: true
})

async function initTorus () {
  await torus.init()
}

async function login () {
  console.log('in login')

  await initTorus()

  const userInfo = await torus.triggerLogin({
    verifier: 'mubc-google',
    typeOfLogin: 'google',
    clientId: '1062557508086-44j40vu7g0dg34pi32ae6kq3arjm6o1j.apps.googleusercontent.com'
  })

  console.log(`userInfo : ${JSON.stringify(userInfo, null, 2)}`)
}

const Login = () => (
  <button style={{ right: 0, position: 'absolute' }} onClick={login}>
    Log in with tor.us
  </button>
)

export default Login
