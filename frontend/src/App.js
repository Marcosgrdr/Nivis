import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';
import { MainLayout } from './components/MainLayout';

import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { CreateDendronPage } from './pages/CreateDendronPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useAuth } from './contexts/AuthContext';


export function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route 
        path="/auth" 
        element={
          isAuthenticated ? <Navigate to="/" /> : <AuthPage />
        } 
      />

      <Route path="/" element={<Navigate to="/dashboard" />} />
      
      <Route 
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/dendron/novo"
        element={
          <ProtectedRoute>
            <MainLayout>
              <CreateDendronPage />
            </MainLayout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/perfil"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          </ProtectedRoute>
        } 
      />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}