import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SharedLayout } from './components/Layout/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route
          path="interests"
          element={<PrivateRoute component={<div>Interests</div>} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute component={<div>Profile</div>} />}
        />
        <Route
          path="friends"
          element={<PrivateRoute component={<div>Friends</div>} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute component={<div>Register</div>} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute component={<div>Login</div>} />}
        /> */}
      </Route>
    </Routes>
  );
}

export default App;
