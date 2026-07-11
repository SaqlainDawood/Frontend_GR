import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import Register from "./pages/Register";
import OwnerLogin from "./pages/OwnerLogin";
import OwnerDashboard from "./pages/OwnerDashboard";
import './styles/globals.css';

// ✅ Owner Auth Guard
const OwnerProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('ownerToken');
  
  if (!token) {
    return <Navigate to="/owner-login" />;
  }
  
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
            borderRadius: '12px',
          },
          success: {
            icon: '🎉',
            style: {
              background: '#155724',
              color: '#fff',
            },
          },
          error: {
            icon: '❌',
            style: {
              background: '#721c24',
              color: '#fff',
            },
          },
        }}
      />
      
      <Routes>
        {/* ✅ Public Routes (For Clients) */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        
        {/* ✅ Owner Routes */}
        <Route path="/owner-login" element={<OwnerLogin />} />
        <Route 
          path="/owner-dashboard" 
          element={
            <OwnerProtectedRoute>
              <OwnerDashboard />
            </OwnerProtectedRoute>
          } 
        />
        
        {/* ✅ Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;