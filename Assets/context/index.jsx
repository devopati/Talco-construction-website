import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  case_study_fillter_value: "",
  setCase_study_filter_value: () => {},
  portforliodata: {},
  setportforliodata: () => {},
});

const AuthProvider = ({ children }) => {
  const [case_study_fillter_value, setCase_study_filter_value] = useState("");
  const [portforliodata, setportforliodata] = useState({});

  useEffect(() => {
    const data =
      localStorage.getItem("case_data") === null
        ? {}
        : JSON.parse(localStorage.getItem("case_data"));

    setportforliodata(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("case_data", JSON.stringify(portforliodata));
  }, [portforliodata]);
  return (
    <AuthContext.Provider
      value={{
        case_study_fillter_value,
        setCase_study_filter_value,
        portforliodata,
        setportforliodata,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
