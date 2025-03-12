

// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function LoginPage() {
//   const [user, setUser] = useState({ user_name: '', password: '' });
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://192.168.1.38:5000/adminLogin',
//         user,
//         {
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );
//       console.log('Login successful:', response.data);
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
//         <form className="mt-6" onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm mb-2" htmlFor="user_name">Username</label>
//             <input 
//               type="text" 
//               id="user_name" 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Enter your username" 
//               value={user.user_name}
//               onChange={(e) => setUser({ ...user, user_name: e.target.value })}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm mb-2" htmlFor="password">Password</label>
//             <input 
//               type="password" 
//               id="password" 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Enter your password" 
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//             />
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;




// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';

// function LoginPage() {
//   const [user, setUser] = useState({ user_name: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const response = await axios.post(
//         'http://192.168.1.38:5000/adminLogin',
//         user,
//         {
//           headers: { 'Content-Type': 'application/json' },
//         }
//       );
//       console.log('Login successful:', response.data);
//       router.push('/admin-dashboard/manage-company');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
//         <form className="mt-6" onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm mb-2" htmlFor="user_name">Username</label>
//             <input 
//               type="text" 
//               id="user_name" 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Enter your username" 
//               value={user.user_name}
//               onChange={(e) => setUser({ ...user, user_name: e.target.value })}
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-600 text-sm mb-2" htmlFor="password">Password</label>
//             <input 
//               type="password" 
//               id="password" 
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
//               placeholder="Enter your password" 
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//             />
//           </div>
//           <div className="flex justify-between items-center mb-4">
//             <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;



"use client"


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const [user, setUser] = useState({ user_name: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'https://caabscore.com/api/adminLogin',
        user,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log('Login successful:', response.data);
      
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      
      router.push('/admin-dashboard/manage-company');
    } catch (error) {
      console.error('Login failed:', error);
    }
    setLoading(false);
  };

  // Set default Axios headers with token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
     
        <img src="/login.jpg" alt="login" className='w-[500px] pe-20' />
    
      <div className="bg-white p-8 w-96 flex flex-col justify-center ">
        <h2 className="text-2xl font-semibold text-blue-600">Admin Login</h2>
        <form className="mt-6" onSubmit={handleLogin}>
          <div className="my-4">
            {/* <label className="block text-gray-600 text-sm mb-2" htmlFor="user_name">Username</label> */}
            <input 
              type="text" 
              id="user_name" 
              className="w-full px-4 py-2 border border-gray-100- outline-none focus:outline-blue-600 mt-6 " 
              placeholder="Enter your username" 
              value={user.user_name}
              onChange={(e) => setUser({ ...user, user_name: e.target.value })}
            />
          </div>
          <div className="my-4">
            {/* <label className="block text-gray-600 text-sm mb-2" htmlFor="password">Password</label> */}
            <input 
              type="password" 
              id="password" 
              className="w-full px-4 py-2 border border-gray-100- outline-none focus:outline-blue-600 mt-4 " 
               
              placeholder="Enter your password" 
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
        
          <button 
            type="submit" 
            className="w-full mt-8 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
