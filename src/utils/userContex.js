// import { createContext } from "react";
// const userContext=createContext({
//     loggedin:"default",
// })
// export default userContext;

import { createContext } from "react";

const userContext = createContext({
  loggedInUser: "Default User",
});

export default userContext;