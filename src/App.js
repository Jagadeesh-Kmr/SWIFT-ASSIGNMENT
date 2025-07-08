import CommentsDashboard from "./components/CommentsDashbord";
import ProfileScreen from "./components/ProfileScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import { DashboardProvider } from "./DashboardContext";

const App = () => {
  return (
    <>
      <DashboardProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<CommentsDashboard />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </BrowserRouter>
      </DashboardProvider>
    </>
  );
};

export default App;
