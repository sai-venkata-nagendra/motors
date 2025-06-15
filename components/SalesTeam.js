import React from 'react';

const SalesTeam = () => {
  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Add / Edit Team</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label htmlFor="actionType" className="mb-2 font-semibold text-gray-700">Select Action Type:</label>
            <select id="actionType" name="actionType" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Add New Team</option>
              <option>Edit Team</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="teamId" className="mb-2 font-semibold text-gray-700">Team ID:</label>
            <input type="text" id="teamId" name="teamId" defaultValue="ST0005" className="p-2 border border-gray-300 rounded-md bg-gray-100" readOnly />
          </div>
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="teamLeaderName" className="mb-2 font-semibold text-gray-700">Team Leader Name:</label>
          <input type="text" id="teamLeaderName" name="teamLeaderName" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-100" />
        </div>
        <div className="mb-8 flex flex-col">
          <label htmlFor="homeBranch" className="mb-2 font-semibold text-gray-700">Home Branch:</label>
          <select id="homeBranch" name="homeBranch" className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select</option>
            <option>Branch A</option>
            <option>Branch B</option>
          </select>
        </div>
        <div className="flex justify-start gap-4">
          <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            Save
          </button>
          <button type="button" className="bg-gray-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SalesTeam; 