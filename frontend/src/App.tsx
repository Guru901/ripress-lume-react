import { useEffect, useState } from "react";

function App() {
  const [hello, setHello] = useState<any>(null);
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/hello");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      setHello(data);
    })();

    (async () => {
      const response = await fetch("/users");

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();

      setUsers(data);
    })();
  }, []);

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Ripress + React minimal demo</h1>
      <div>
        <h2>/hello</h2>
        <pre>{hello ? JSON.stringify(hello, null, 2) : "Loading..."}</pre>
      </div>
      <div>
        <h2>/users (from database)</h2>
        <pre>{users ? JSON.stringify(users, null, 2) : "Loading..."}</pre>
      </div>
    </div>
  );
}

export default App;
