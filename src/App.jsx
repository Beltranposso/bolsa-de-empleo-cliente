import { useState } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { routes } from './RouterConfig'
import './app.css'

function App() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState([
    { id: 1, message: 'Your call has been confirmed.', time: '1 hour ago' },
    { id: 2, message: 'You have a new message!', time: '1 hour ago' },
    { id: 3, message: 'Your subscription is expiring soon!', time: '2 hours ago' },
  ]);

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const markAllAsRead = () => {
    setUnreadNotifications([]);
  };
  return (
    <BrowserRouter>
      <div className='h-full'>
        <div className='h-16 bg-slate-50 flex justify-center items-center'>
          <div className='flex gap-12'>
            <Link to='/Home' className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <p>Home</p>
            </Link>
            <Link to='/Empleos' className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
              <p>Empleos</p>
            </Link>
            <div className='relative flex flex-col items-center'>
              <button onClick={toggleNotifications} className='flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <p>Notificaciones</p>
              </button>
              {isNotificationsOpen && (
                <div className="fixed top-20 right-10 w-80 bg-white border border-gray-300 shadow-lg rounded-lg z-50 p-4">
                  <h3 className="text-lg font-bold mb-2">Notifications</h3>
                  <p className="text-sm text-gray-500 mb-4">You have {unreadNotifications.length} unread messages.</p>
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-bell">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    <label className="ml-2">Push Notifications</label>
                    <input type="checkbox" className="ml-auto" />
                  </div>
                  <ul>
                    {unreadNotifications.map((notification) => (
                      <li key={notification.id} className="flex items-start p-2 border-b border-gray-300">
                        <span className="mr-2 h-2 w-2 bg-blue-500 rounded-full mt-2"></span>
                        <div>
                          <p>{notification.message}</p>
                          <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={markAllAsRead}
                    className="mt-4 w-full bg-black text-white py-2 rounded-lg"
                  >
                    Mark all as read
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
        <div className='h-screen'>
          {
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
              ))}
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App