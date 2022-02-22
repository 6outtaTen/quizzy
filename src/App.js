import './App.css';
import React from "react"
import LoginPage from './components/login/register/LoginPage';
import RegisterPage from './components/login/register/RegisterPage';
import Dashboard from './components/Dashboard'
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateNewQuizBasicInfo from './components/CreateNewQuizBasicInfo';
import CreateNewQuizAddQuestions from './components/CreateNewQuizAddQuestions';



export default function App() {
  return (
    <AuthProvider>
      <>
        <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/create-new-quiz/basic-info" element={<CreateNewQuizBasicInfo />} />
              <Route path="/create-new-quiz/add-questions" element={<CreateNewQuizAddQuestions />} />

            </Routes>
        </Router>
      </>
    </AuthProvider>
  );
}