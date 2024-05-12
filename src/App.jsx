import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';

import i18n from "./utils/i18n";
import { Layout } from "./routes/Layout/Layout";
import { Main } from "./routes/Main/Main";
import { Contacts } from "./routes/Contacts/Contacts";
import { Admission } from "./routes/Admission/Admission";
import { Academics } from "./routes/Academics";
import { CampusNavigation } from "./routes/CampusNavigation/CampusNavigation";

function App() {
  return (
    <div>
      <I18nextProvider i18n={i18n}>
        <Router basename="/">
          <Layout>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/contact-us" element={<Contacts />} />
              <Route path="/admissions" element={<Admission />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/campus-navigation" element={<CampusNavigation />} />
            </Routes>
          </Layout>
        </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;
