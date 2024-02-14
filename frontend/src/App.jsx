import { useAuth } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/404";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import Products from "./pages/products";
import { Layout } from "./layouts";

function App() {
  const { isSignedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<>About page</>} />
          <Route path="/login" element={<Login />} />

          {isSignedIn && (
            <>
              <Route path="/products" element={<Products />} />
            </>
          )}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
