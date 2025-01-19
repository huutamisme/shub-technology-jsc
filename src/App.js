import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Task1 from './pages/Task1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Task1 /> },
      { path: 'task2', element: <Task2 /> },
      { path: 'task3', element: <Task3 /> },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

