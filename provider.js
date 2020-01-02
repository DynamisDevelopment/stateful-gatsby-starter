import React, { useState } from 'react'

export const myContext = React.createContext()

const Provider = props => {
  const [isDark, setTheme] = useState(true)

  return (
    <myContext.Provider value={{
      state: isDark,
      changeTheme: () => setTheme(!isDark)
    }}>
      {props.children}
    </myContext.Provider>
  )
}

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)
