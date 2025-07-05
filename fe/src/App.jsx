import { useState, useEffect } from 'react';
import './App.css'; 
function App() {
  const [numberOfUsers, setNumberOfUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/users');
      const users = await response.json();
      setNumberOfUsers(users.length); 
    } catch (error) {
      console.error("Fetch failed:", error);
      setNumberOfUsers('Error loading users');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Count</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Number of users: {numberOfUsers}</p>
      )}
    </div>
  );
}

export default App;