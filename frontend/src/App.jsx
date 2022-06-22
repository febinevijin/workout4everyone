import "./App.css";

import HomeScreen from "./screens/user/HomeScreen";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Choosepage from "./screens/Choosepage";

// ==================USER========================
import LoginScreen from "./screens/user/LoginScreen";
import RegisterScreen from "./screens/user/RegisterScreen";
import UserProfile from "./screens/user/profile/UserProfile";
import Product from "./screens/user/product/Product";
import OneProduct from './screens/user/onePro/OneProduct';

// =================================================

// ====================TRAINER========================
import TrainerLoginScreen from "./screens/trainer/trainerLogin/TrainerLoginScreen";
import TrainerRegisterScreen from "./screens/trainer/register/TrainerRegisterScreen";
import TrainerHomePage from "./screens/trainer/homePage/TrainerHomePage";
import Video from "./screens/trainer/video/Video";
// =====================================================

// ==========================ADMIN========================
import AdminLoginScreen from "./screens/admin/AdminLoginScreen";
import AdminHomeScreen from "./screens/admin/dashboard/AdminHomeScreen";
import UserList from "./screens/admin/userList/UserList";
import TestScreen from "./Testscreen";
import { AuthProvider } from "./context/AuthContext";
import AddVideo from "./screens/trainer/addVideo/AddVideo";
import TrainerList from "./screens/admin/trainerList/TrainerList";
import Application from "./screens/admin/application/Application";
import MyWorkout from "./screens/user/MyWorkout/MyWorkout";
import VideoPlayer from "./screens/user/video/VideoPlayer";
import TrainerProfile from "./screens/trainer/trainerProfile/TrainerProfile";
import AddRealVideo from "./screens/trainer/addRealVideo/AddRealVideo";
import Wallet from "./screens/admin/wallet/Wallet";
import TrainerWallet from "./screens/trainer/trainerWallet/TrainerWallet";


// ==========================================================



function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* ==================USER======================== */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/loginUser" element={<LoginScreen />} />
        <Route path="/registerUser" element={<RegisterScreen />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/myWorkout" element={<MyWorkout />} />
        <Route path="/OneProduct/:id" element={<OneProduct/>} />
        <Route path="/videoPlayer/:id" element={<VideoPlayer />} />

        {/* ================================================= */}

        {/* ====================TRAINER======================== */}
        <Route path="/loginTrainer" element={<TrainerLoginScreen />} />
        <Route path="/registerTrainer" element={<TrainerRegisterScreen />} />
        <Route path="/trainerHomepage" element={<TrainerHomePage />} />
        <Route path="/trainerVideo" element={<Video/>} />
        <Route path="/trainerAddVideo" element={<AddVideo/> }/>
        <Route path="/trainerAddRealVideo" element={<AddRealVideo/> }/>
        <Route path="/trainerProfile" element={<TrainerProfile/> }/>
        <Route path='/trainerWallet'  element={<TrainerWallet/>}/>
        
        {/* ===================================================== */}

        {/* ==========================ADMIN======================== */}


        <Route path="/admin" element={<AdminHomeScreen />} />
        <Route path="/loginAdmin" element={<AdminLoginScreen />} />
        <Route path='/usersList'  element={<UserList/>}/>
        <Route path='/trainersList'  element={<TrainerList/>}/>
        <Route path='/application'  element={<Application/>}/>
        <Route path='/wallet'  element={<Wallet/>}/>

        
        {/* ========================================================== */}

        <Route path="/choosepage" element={<Choosepage />} />
        <Route path="/product" element={<Product />} />

        <Route path="/test" element={<TestScreen/>}/>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
