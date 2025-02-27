import { useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  useEffect(() => {
    async function testDB() {
      const { data, error } = await supabase.from("users").select("*");
      if (error) console.error(error);
      else console.log(data);
    }
    testDB();
  }, []);

  return <h1>Supabase Connected (Check Console)</h1>;
}

export default App;
