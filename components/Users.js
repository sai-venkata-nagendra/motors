import React from 'react';
import FormLayout from './FormLayout';
import ResponsiveTable from './ResponsiveTable';

const Users = () => {
  const usersData = [
    { id: 1, userId: 'RAM0004U', loginId: 'ranjeet.singh', userName: 'Ranjeet.bajaj', role: 'Executive', active: 'Yes', locked: 'No', phone: '9871719100', email: 'ranjeetsolanki@ymail.com', branch: 'Daya Inder Marketing Bajaj Gurgaon' },
    { id: 2, userId: 'RAM0006U', loginId: 'deepshikha.s', userName: 'Deepshikha Singh', role: 'Executive', active: 'No', locked: 'No', phone: '8696706538', email: 'singhdeepshika1996@gmail.com', branch: 'Main Branch' },
    { id: 3, userId: 'RAM0009U', loginId: 'vikram.k', userName: 'Vikram Kumar', role: 'Executive', active: 'Yes', locked: 'No', phone: '9711619000', email: '', branch: 'Pataudi' },
    { id: 4, userId: 'RAM0011U', loginId: 'jitendra.t', userName: 'Jitendra Tripathi', role: 'Executive', active: 'No', locked: 'No', phone: '7838986605', email: '', branch: 'Main Branch' },
    { id: 5, userId: 'RAM0012U', loginId: 'lokesh.k', userName: 'Lokesh Kumar', role: 'Executive', active: 'No', locked: 'No', phone: '9999492467', email: 'RAJHANSSOHNA.BAXY@GMAIL.COM', branch: 'Royal Motors-Faridabad' },
    { id: 6, userId: 'RAM0014U', loginId: 'rahul', userName: 'Rahul', role: 'Executive', active: 'Yes', locked: 'No', phone: '9560472011', email: '', branch: 'Main Branch' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider mb-8">
        Add / Edit / Manage Users
      </h1>
      
      <FormLayout title="User Details" className="mb-10">
        <div className="col-span-2">
          <label htmlFor="actionType" className="block mb-2 font-semibold text-gray-700">Select Action Type:</label>
          <select id="actionType" name="actionType" className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Manage User</option>
            <option>Add User</option>
            <option>Edit User</option>
          </select>
        </div>
        
        {/* Left Column */}
        <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="userId" className="block font-semibold text-gray-700 mb-1">User ID:</label>
              <input type="text" id="userId" name="userId" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="userName" className="block font-semibold text-gray-700 mb-1">User Name:</label>
              <input type="text" id="userName" name="userName" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="loginId" className="block font-semibold text-gray-700 mb-1">Login ID:</label>
              <input type="text" id="loginId" name="loginId" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="userRole" className="block font-semibold text-gray-700 mb-1">User Role:</label>
              <input type="text" id="userRole" name="userRole" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="mobileNo" className="block font-semibold text-gray-700 mb-1">Mobile No.:</label>
              <input type="text" id="mobileNo" name="mobileNo" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="active" className="block font-semibold text-gray-700 mb-1">Active:</label>
              <input type="text" id="active" name="active" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="deptt" className="block font-semibold text-gray-700 mb-1">Deptt:</label>
              <input type="text" id="deptt" name="deptt" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="homeBranch" className="block font-semibold text-gray-700 mb-1">Home Branch:</label>
              <input type="text" id="homeBranch" name="homeBranch" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="locked" className="block font-semibold text-gray-700 mb-1">Locked:</label>
              <input type="text" id="locked" name="locked" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>
        
        <div className="col-span-2 flex items-center gap-4 mt-6">
          <button type="button" className="bg-blue-600 w-36 h-10 rounded-md"></button>
          <button type="button" className="bg-blue-600 w-36 h-10 rounded-md"></button>
          <button type="button" className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300">
            Reset Password
          </button>
        </div>
      </FormLayout>

      <h2 className="text-xl font-bold text-gray-800 mb-4 mt-10">List of Current Users:-</h2>
      <ResponsiveTable>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-800 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left">Sr.</th>
              <th className="py-3 px-4 text-left">User ID</th>
              <th className="py-3 px-4 text-left">Login ID</th>
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Active?</th>
              <th className="py-3 px-4 text-left">Locked?</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Branch</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {usersData.map((user, index) => (
              <tr key={user.id} className={`border-b border-gray-200 hover:bg-blue-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="py-3 px-4 text-left whitespace-nowrap">{user.id}</td>
                <td className="py-3 px-4 text-left">{user.userId}</td>
                <td className="py-3 px-4 text-left">{user.loginId}</td>
                <td className="py-3 px-4 text-left">{user.userName}</td>
                <td className="py-3 px-4 text-left">{user.role}</td>
                <td className="py-3 px-4 text-left">{user.active}</td>
                <td className="py-3 px-4 text-left">{user.locked}</td>
                <td className="py-3 px-4 text-left">{user.phone}</td>
                <td className="py-3 px-4 text-left">{user.email}</td>
                <td className="py-3 px-4 text-left">{user.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ResponsiveTable>
    </div>
  );
};

export default Users;
