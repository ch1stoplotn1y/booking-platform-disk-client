import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
import UserContextProvider from "./contexts/UserContext.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PropertiesPage from "./pages/PropertiesPage.jsx";
import AddPropertyForm from "./pages/AddPropertyForm.jsx";
import SinglePlacePage from "./pages/SinglePropertyPage.jsx";
import SingleBookingPage from "./pages/SingleBookingPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import AdminPanelPage from "./pages/AdminPanelPage.jsx";
import EditUserPage from "./pages/EditUserPage.jsx";
import EditPropertyPage from "./pages/EditPropertyPage.jsx";
import EditBookingPage from "./pages/EditBookingPage.jsx";
import SingleUserProfile from "./pages/SingleUserProfile.jsx";
axios.defaults.baseURL = "http://82.202.129.86/api";
axios.defaults.withCredentials = true;
//routes
function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile/account" element={<ProfilePage />} />
                    <Route
                        path="/profile/properties"
                        element={<PropertiesPage />}
                    />
                    <Route
                        path="/profile/properties/new"
                        element={<AddPropertyForm />}
                    />
                    <Route
                        path="/profile/properties/:id"
                        element={<AddPropertyForm />}
                    />
                    <Route path="/property/:id" element={<SinglePlacePage />} />
                    <Route
                        path="/profile/bookings"
                        element={<BookingsPage />}
                    />
                    <Route
                        path="/profile/bookings/:id"
                        element={<SingleBookingPage />}
                    />
                    <Route path="/profile/admin" element={<AdminPanelPage />} />
                    <Route
                        path="/profile/admin/edit-user/:id"
                        element={<EditUserPage />}
                    />
                    <Route
                        path="/profile/admin/edit-booking/:id"
                        element={<EditBookingPage />}
                    />
                    <Route path="/users/:id" element={<SingleUserProfile />} />
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;
