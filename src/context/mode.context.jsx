// import { ThemeProvider, createTheme } from "@mui/material";
// import React from "react";
// import App from "../App";

// export const ColorModeContext = React.createContext({
//   toggleColorMode: () => {},
// });

// export default function ToggleColorMode() {
//   const [mode, setMode] = React.useState("light");
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }
