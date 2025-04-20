import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';
import { ProtectedRoute, Logout } from 'src/auth';

// ----------------------------------------------------------------------

export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const HajjGuide = lazy(() => import('src/pages/hajj-guide'));
export const DuaCollection = lazy(() => import('src/pages/dua-collection'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const PreUmrah = lazy(() => import('src/pages/pre-umrah'));
export const UmrahChecklist = lazy(() => import('src/pages/umrah-checklist'));
export const SafetyGuide = lazy(() => import('src/pages/safety-guide'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

export const routesSection: RouteObject[] = [
  {
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'dua-collection', element: <DuaCollection /> },
      { path: 'pre-umrah', element: <PreUmrah /> },
      { path: 'hajj-guide', element: <HajjGuide /> },
      { path: 'umrah-checklist', element: <UmrahChecklist /> },
      { path: 'safety-guide', element: <SafetyGuide /> },
    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },
  {
    path: 'logout',
    element: <Logout />,
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];
