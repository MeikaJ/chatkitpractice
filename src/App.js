import React from "react"
import "./App.css"
import {
  ChatkitProvider,
  TokenProvider,
  withChatkit,
} from "@pusher/chatkit-client-react"

const instanceLocator = "v1:us1:09f679ce-bb4d-4a68-a035-3cd337905ada"
const userId = "alice"

const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/09f679ce-bb4d-4a68-a035-3cd337905ada/token",
})
const WelcomeMessage = props => {
  return <div>Hello Chatkit!</div>
}


function App() {
  return (
    <div className="App">
      <ChatkitProvider
        instanceLocator={instanceLocator}
        tokenProvider={tokenProvider}
        userId={userId}
      >
        <WelcomeMessage />
      </ChatkitProvider>
    </div>
  )
}


export default App