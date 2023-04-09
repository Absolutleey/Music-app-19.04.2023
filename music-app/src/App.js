import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { albumFactory } from "./services/albumService";
import { authServiceFactory } from "./services/authService";
import { authContext } from "./contexts/AuthContext";
import { RouteGuard } from "./components/common/RouteGuard";

import { Catalog } from "./components/Catalog/Catalog";
import { CreateAlbum } from "./components/Create/CreateAlbum";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Search } from "./components/Search/Search";
import { Logout } from "./components/Logout/Logout";

function App() {
  const navigate = useNavigate();
  const [album, setAlbum] = useState([]);
  const [auth, setAuth] = useState({});
  const albumService = albumFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

  useEffect(() => {
    albumService.getAll().then((result) => {
      setAlbum(result);
    });
  }, []);

  const albumCreateSubmit = async (data, token) => {
    const newAlbum = await albumService.create(data, token);
    setAlbum((state) => [...state, newAlbum]);
    navigate("/catalog");
  };

  const loginSubmit = async (data) => {
    const result = await authService.login(data);
    setAuth(result);
    navigate("/catalog");
  };

  const registerSubmit = async (values) => {
    const { confPass, ...registerData } = values;
    if (confPass !== registerData.password) {
      return;
    }

    const result = await authService.register(registerData);
    setAuth(result);
    navigate("/catalog");
  };

  const onLogout = async () => {
    setAuth({});

    await authService.logout();
  };

  const onAlbumEditSubmit = async (values) => {
    const result = await albumService.edit(values._id, values);
    setAlbum((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/catalog/${values._id}`);
  };

  const contex = {
    registerSubmit,
    loginSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAutheticated: !!auth.accessToken,
  };

  return (
    <authContext.Provider value={contex}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/catalog" element={<Catalog album={album} />} />
            <Route path="/catalog/:albumId" element={<Details />} />
            <Route path="/logout" element={<Logout />} />
            
            <Route element={<RouteGuard />}>
            <Route
              path="/create"
              element={<CreateAlbum albumCreateSubmit={albumCreateSubmit} />}
            />

            <Route
              path="/catalog/:albumId/edit"
              element={<Edit onAlbumEditSubmit={onAlbumEditSubmit} />}
            />
            
            
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </authContext.Provider>
  );
}

export default App;
