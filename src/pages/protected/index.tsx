import React, { useEffect, useState } from "react";
import { Route, Navigate, RouteProps, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

type ProtectedRouteProps = {
  element: React.ReactNode;
} & RouteProps;

function ProtectedRoute({ element, ...rest }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    // Loading state
    return null;
  }

  return (
    <Routes >
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/" />}
    />
    </Routes>
  );
}

export default ProtectedRoute;
