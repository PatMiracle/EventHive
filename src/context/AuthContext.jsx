import { createContext, useContext } from 'react'

const authContext = createContext(null)

// custom hook
export const useAuth = () => useContext(createContext)

const AuthContext = ({ children }) => {
  return <authContext.Provider>{children}</authContext.Provider>
}

export default AuthContext
