import React from 'react';
import { useData } from '../context/DataContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Profile = () => {
  const { users, loading, error } = useData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // For demo, show the first user
  const user = users[0];

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">User Profile</h1>
            {user && (
              <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <p className="mt-1 text-sm text-gray-900">{user.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <p className="mt-1 text-sm text-gray-900">{user.username}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <p className="mt-1 text-sm text-gray-900">{user.phone}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Website</label>
                        <p className="mt-1 text-sm text-gray-900">{user.website}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Address</h2>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Street</label>
                        <p className="mt-1 text-sm text-gray-900">{user.address?.street}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Suite</label>
                        <p className="mt-1 text-sm text-gray-900">{user.address?.suite}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">City</label>
                        <p className="mt-1 text-sm text-gray-900">{user.address?.city}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Zipcode</label>
                        <p className="mt-1 text-sm text-gray-900">{user.address?.zipcode}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Company</h2>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <p className="mt-1 text-sm text-gray-900">{user.company?.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Catch Phrase</label>
                      <p className="mt-1 text-sm text-gray-900">{user.company?.catchPhrase}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Business</label>
                      <p className="mt-1 text-sm text-gray-900">{user.company?.bs}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;