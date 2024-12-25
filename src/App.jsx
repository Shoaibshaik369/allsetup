import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../src/components/super-admin/Sidebar";
import Setup from "../src/components/super-admin/Setup";
import G_setting from "./components/super-admin/G_setting";
import Attendance_settings from "./components/super-admin/Attendance_settings";
import Notifications_setings from "./components/super-admin/Notifications_setings";
import System_update from "./components/super-admin/System_update";
import Captcha_settings from "./components/super-admin/Captcha_settings";
import Modules from "./components/super-admin/Modules";
import Users from "./components/super-admin/Users";
import Languages from "./components/super-admin/Languages";
import Backuprestore from "./components/super-admin/Backuprestore";
import Rolesandpermisisons from "./components/super-admin/Rolesandpermisisons";
import Prefix_settings from "./components/super-admin/Prefix_settings";
import Front_cms_settings from "./components/super-admin/Front_cms_settings";
import Payments_methods from "./components/super-admin/Payments_methods";
import Email_settings from "./components/super-admin/Email_settings";
import Sms_settings from "./components/super-admin/Sms_settings";
import System_notifi_settings from "./components/super-admin/System_notifi_settings";

import "./styles/App.css";
import Topbar from "./components/super-admin/Topbar";

const App = () => (
  <div className="app">
    <Sidebar />
    <div className="main-content">
      <Topbar/>
      <Routes>
       

        {/* General Setup */}
        <Route path="/super-admin" element={<Setup />} />
        <Route path="/super-admin/settings/general" element={<G_setting />} />
        <Route path="/super-admin/settings/attendance" element={<Attendance_settings />} />
        <Route path="/super-admin/settings/notification" element={<Notifications_setings />} />
        <Route path="/super-admin/settings/system-update" element={<System_update />} />
        <Route path="/super-admin/settings/modules" element={<Modules />} />
        <Route path="/super-admin/settings/captcha" element={<Captcha_settings />} />
        <Route path="/super-admin/settings/users" element={<Users />} />
        <Route path="/super-admin/settings/languages" element={<Languages />} />
        <Route path="/super-admin/settings/backup-restore" element={<Backuprestore />} />
        <Route path="/super-admin/settings/roles-permissions" element={<Rolesandpermisisons />} />
        <Route path="/super-admin/settings/prefix" element={<Prefix_settings />} />
        <Route path="/super-admin/settings/front-cms" element={<Front_cms_settings />} />
        <Route path="/super-admin/settings/payment-methods" element={<Payments_methods />} />
        <Route path="/super-admin/settings/email" element={<Email_settings />} />
        <Route path="/super-admin/settings/sms" element={<Sms_settings />} />
        <Route path="/super-admin/settings/system-notification" element={<System_notifi_settings />} />

        {/* Fallback Route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  </div>
);

export default App;
