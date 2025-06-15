import React from 'react';
import FormLayout from './FormLayout';

const Dealers = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-blue-900 tracking-wider mb-8">
        Add / Edit Dealer
      </h1>
      <FormLayout>
        <div className="col-span-2">
          <label htmlFor="actionType" className="block mb-2 font-semibold text-gray-700">Select Action Type:</label>
          <select id="actionType" name="actionType" className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Add New Dealer</option>
            <option>Edit Dealer</option>
          </select>
        </div>

        {/* Left Column */}
        <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="dealerId" className="block font-semibold text-gray-700 mb-1">Dealer ID</label>
              <input type="text" id="dealerId" name="dealerId" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="dealerName" className="block font-semibold text-gray-700 mb-1">Dealer Name:</label>
              <input type="text" id="dealerName" name="dealerName" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-100" />
            </div>
            <div>
              <label htmlFor="dealerFor" className="block font-semibold text-gray-700 mb-1">Dealer For:</label>
              <input type="text" id="dealerFor" name="dealerFor" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="state" className="block font-semibold text-gray-700 mb-1">State:</label>
              <select id="state" name="state" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>
            <div>
              <label htmlFor="contactPerson" className="block font-semibold text-gray-700 mb-1">Contact Person:</label>
              <input type="text" id="contactPerson" name="contactPerson" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="phone1" className="block font-semibold text-gray-700 mb-1">Phone 1:</label>
              <input type="text" id="phone1" name="phone1" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
             <div>
               <label htmlFor="city" className="block font-semibold text-gray-700 mb-1">City:</label>
               <select id="city" name="city" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                 <option>Select</option>
                 <option>City 1</option>
                 <option>City 2</option>
               </select>
             </div>
            <div>
              <label htmlFor="phone2" className="block font-semibold text-gray-700 mb-1">Phone 2:</label>
              <input type="text" id="phone2" name="phone2" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="subventionAmt" className="block font-semibold text-gray-700 mb-1">Subvention Amt:</label>
              <input type="text" id="subventionAmt" name="subventionAmt" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>

        <div className="col-span-2 flex justify-start gap-4 mt-8">
          <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300">
            Save
          </button>
          <button type="button" className="bg-gray-400 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300">
            Cancel
          </button>
        </div>
      </FormLayout>
    </div>
  );
};

export default Dealers; 