import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ClanService, Clan } from "./services/ClanService";
import CallToAction from "./Components/CallToAction";
import Album from "./Components/Album";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [clans, setClans] = useState<Array<Clan>>();

  useEffect(() => {
    setIsLoading(true);
    const clanService = new ClanService();
    clanService.getClanById().then((response) => {
      setClans(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <CallToAction
          clans={clans ? clans : []}
          isLoading={isLoading}
          onClick={setClans}
        />
      </header>
      <div>
        <Album clans={clans ? clans : []} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
