import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import LanguageContext from "./contexts/Language";
import Homepage from "./pages/Homepage";
import Hackathon from "./pages/Hackathon";
import TechMarathon from "./pages/TechMarathon";
import TalentConnector from "./pages/TalentConnector";
import Mentorship from "./pages/Mentorship";
import Webinar from "./pages/Webinar";
import About from "./pages/About";
import NavBar from "./components/layout/NavBar";
import { configRoute } from "./utils/routes";
import { configLanguage } from "./utils/language";

const routeMapping = {
  home: configRoute("/", Homepage, configLanguage("Trang Chủ", "Home")),
  hackathon: configRoute(
    "/hackathon",
    Hackathon,
    configLanguage("Hackathon", "Hackathon")
  ),
  techMarathon: configRoute(
    "/tech-marathon",
    TechMarathon,
    configLanguage("Tech Marathon", "Tech Marathon")
  ),
  talentConnector: configRoute(
    "/talent-connector",
    TalentConnector,
    configLanguage("Talent Connector", "Talent Connector")
  ),
  mentorship: configRoute(
    "/mentorship",
    Mentorship,
    configLanguage("Mentorship", "Mentorship")
  ),
  webinar: configRoute(
    "/webinar",
    Webinar,
    configLanguage("Webinar", "Webinar")
  ),
  about: configRoute("/about", About, configLanguage("Giới thiệu", "About")),
};

function App() {
  const [lang, setLang] = useState("vn");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <div className="container">
          <header>
            <NavBar routeMapping={routeMapping} />
          </header>

          <main>
            <Switch>
              {Object.keys(routeMapping).map(function map(obj, index) {
                return (
                  <Route
                    key={index}
                    path={routeMapping[obj].route}
                    component={routeMapping[obj].component}
                    exact
                  />
                );
              })}
            </Switch>
          </main>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
