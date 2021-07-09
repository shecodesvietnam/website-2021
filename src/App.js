import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import LanguageContext from "./contexts/Language";
import Homepage from "./pages/Homepage";
import Hackathon from "./pages/Hackathon";
import HackathonDetails from "./pages/HackathonDetails";
import TechMarathon from "./pages/TechMarathon";
import TalentConnector from "./pages/TalentConnector";
import Mentorship from "./pages/Mentorship";
import Webinar from "./pages/Webinar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Members from "./pages/Members";
import Sponsors from "./pages/Sponsors";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { configRoute } from "./utils/routes";
import { configLanguage } from "./utils/language";

const mainRouteMapping = {
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

const secondaryRouteMapping = {
  sponsors: configRoute(
    "/sponsors",
    Sponsors,
    configLanguage("Nhà tài trợ", "Sponsors")
  ),
  contact: configRoute(
    "/contact",
    Contact,
    configLanguage("Liên hệ", "Contact")
  ),
  blog: configRoute("/blog", Blog, configLanguage("Blog", "Blog")),
  members: configRoute(
    "/members",
    Members,
    configLanguage("Thành viên", "Members")
  ),
};

function App() {
  const [lang, setLang] = useState("vn");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router basename="/">
        <div className="relative font-text w-auto bg-black">
          <Header routeMapping={mainRouteMapping} />
          <main>
            <Switch>
              {Object.keys(mainRouteMapping).map(function map(obj, index) {
                return (
                  <Route
                    key={index}
                    path={mainRouteMapping[obj].route}
                    component={mainRouteMapping[obj].component}
                    exact
                  />
                );
              })}
              {Object.keys(secondaryRouteMapping).map(function map(obj, index) {
                return (
                  <Route
                    key={index}
                    path={secondaryRouteMapping[obj].route}
                    component={secondaryRouteMapping[obj].component}
                    exact
                  />
                );
              })}
              <Route path="/hackathon/:year" component={HackathonDetails} />
            </Switch>
          </main>
          <Footer secondaryRouteMapping={secondaryRouteMapping} />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
