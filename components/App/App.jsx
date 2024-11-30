import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../Routes";
import "../../Assets/styles/index.css"
import { AuthProvider } from "../../Assets/context";
const App = () => {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
     </AuthProvider>
    </>
  );
};
export default App;
