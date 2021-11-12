import { GlobalProvider } from 'Components/Providers/global.provider';
import CIPPage from 'pages/CIP.page';
import JAPPage from 'pages/JAP.page';
import PolitiqueQualitePage from 'pages/PolitiqueQualite.page';
import RapportAuditPage from 'pages/RapportAudit.page';
import RegistreDocumentsPage from 'pages/RegistreDocumentsInternes.page';
import RegistreEnregistrementsPage from 'pages/RegistreEnregistrements.page';
import RevuePage from 'pages/Revue.page';
import RevueDirectionPage from 'pages/RevueDirection.page';
import * as React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.less';
import TableauBordPage from './pages/TableauBord.page';
export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/40de5b81-9a90-40c6-9639-1ac4c2a52cda"><PolitiqueQualitePage /></Route>
          <Route path="/203aacce-6953-46b4-a02c-319ff9307bf7"><CIPPage /></Route>
          <Route path="/49fb08f4-ac0c-4243-8d55-47db186b74c5"><TableauBordPage /></Route>
          <Route path="/0ee690cd-4303-4138-ac93-d78611dc2055"><RegistreDocumentsPage /></Route>
          <Route path="/12652aa5-bc38-4042-ac14-ff414f0df191"><RegistreEnregistrementsPage /></Route>
          <Route path="/95d14eb9-bb90-4182-b9e6-16b74e2454f4"><JAPPage /></Route>
          <Route path="/3e375690-dd33-40e9-9a54-066740041647"><RapportAuditPage /></Route>
          <Route path="/2825c264-a266-46c8-bcb8-1b3b8d66c976"><RevuePage /></Route>
          <Route path="/650443f5-9be1-4d91-a0fc-2f45aee7dd04"><RevueDirectionPage /></Route>
          <Route path="/"><PolitiqueQualitePage /></Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}
