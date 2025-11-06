import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Componentes
import { ProtectedRoute } from './components/ProtectedRoute';
import { MainLayout } from './components/MainLayout';

// Páginas
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { CreateDendronPage } from './pages/CreateDendronPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Contexto
import { useAuth } from './contexts/AuthContext';


export function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* Rota de Autenticação: Redireciona para o Dashboard se o usuário estiver logado */}
      <Route 
        path="/auth" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPage />
        } 
      />

      {/* Rota Raiz: Redireciona para o Dashboard (Authenticated ou não) */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Rotas Protegidas (Exigem Autenticação) */}
      
      {/* Dashboard */}
      <Route 
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout><DashboardPage /></MainLayout>
          </ProtectedRoute>
        } 
      />
      
      {/* Novo Dendron */}
      <Route 
        path="/dendron/novo"
        element={
          <ProtectedRoute>
            <MainLayout><CreateDendronPage /></MainLayout>
          </ProtectedRoute>
        } 
      />

      {/* Perfil */}
      <Route 
        path="/perfil"
        element={
          <ProtectedRoute>
            <MainLayout><ProfilePage /></MainLayout>
          </ProtectedRoute>
        } 
      />

      {/* Rota 404 (Qualquer outra rota não definida) */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}