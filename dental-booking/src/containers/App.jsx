import React, { useEffect, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import routes from "../routes";

function App() {
  const {
    providerMethod: { fetchCurrentUser },
  } = useAuthContext();

  const currentUsername = useMemo(
    () => sessionStorage.getItem("currentUsername"),
    []
  );

  useEffect(() => {
    if (currentUsername) {
      fetchCurrentUser(currentUsername);
    }
  }, [currentUsername]);

  return (
    <>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.path} element={route.element} path={route.path} />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
