import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoDesktopOutline,
  IoCashOutline,
  IoCalendarOutline,
  IoMedkitOutline,
  IoFlaskOutline,
  IoImagesOutline,
  IoWaterOutline,
  IoCarSportOutline,
  IoBarChartOutline,
  IoShareOutline,
  IoSettings,
} from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHospital, FaBookDead, FaUserAlt } from "react-icons/fa";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation().pathname;

  const menuItems = [
    { icon: <IoBarChartOutline />, text: "Dashboard", link: "/" },
    { icon: <IoCalendarOutline />, text: "Appointment", link: "/appointment" },
    { icon: <IoCashOutline />, text: "Billing", link: "/billing" },
    { icon: <IoMedkitOutline />, text: "OPD", link: "/opd" },
    { icon: <FaHospital />, text: "IPD", link: "/ipd" },
    { icon: <IoFlaskOutline />, text: "Pharmacy", link: "/pharmacy" },
    { icon: <IoImagesOutline />, text: "Pathology", link: "/pathology" },
    { icon: <IoImagesOutline />, text: "Radiology", link: "/radiology" },
    { icon: <IoWaterOutline />, text: "Blood Bank", link: "/blood-bank" },
    { icon: <IoCarSportOutline />, text: "Ambulance", link: "/ambulance" },
    { icon: <IoCalendarOutline />, text: "Calendar", link: "/calendar" },
    { icon: <MdMessage />, text: "Notifications", link: "/notifications" },
    { icon: <IoDesktopOutline />, text: "Front Office", link: "/front-office" },
    { icon: <FaUserAlt />, text: "Human Resource", link: "/human-resource" },
    { icon: <IoCalendarOutline />, text: "Duty Roster", link: "/duty-roster" },
    { icon: <IoShareOutline />, text: "Referral", link: "/referral" },
    { icon: <MdMessage />, text: "TPA Management", link: "/tpamanagement" },
    {
      icon: <FaBookDead />,
      text: "Birth & Death Record",
      dropdown: [
        { text: "Birth Record", link: "/b&drecords/birth-record" },
        { text: "Death Record", link: "/b&drecords/death-record" },
      ],
    },
    {
      icon: <IoCashOutline />,
      text: "Finance",
      dropdown: [
        { text: "Income", link: "/finance/income" },
        { text: "Expenses", link: "/finance/expenses" },
      ],
    },
    {
      icon: <IoSettings />,
      text: "Setup",
      dropdown: [
        { text: "General Settings", link: "/super-admin/settings/general" },
        { text: "Attendance Settings", link: "/super-admin/settings/attendance" },
        { text: "Notification Settings", link: "/super-admin/settings/notification" },
        { text: "System Notification Settings", link: "/super-admin/settings/system-notification" },
        { text: "SMS Settings", link: "/super-admin/settings/sms" },
        { text: "Email Settings", link: "/super-admin/settings/email" },
        { text: "Payment Methods", link: "/super-admin/settings/payment-methods" },
        { text: "Front CMS Settings", link: "/super-admin/settings/front-cms" },
        { text: "Prefix Settings", link: "/super-admin/settings/prefix" },
        { text: "Roles & Permissions", link: "/super-admin/settings/roles-permissions" },
        { text: "Backup / Restore", link: "/super-admin/settings/backup-restore" },
        { text: "Languages", link: "/super-admin/settings/languages" },
        { text: "Users", link: "/super-admin/settings/users" },
        { text: "Captcha Settings", link: "/super-admin/settings/captcha" },
        { text: "Modules", link: "/super-admin/settings/modules" },
        { text: "System Update", link: "/super-admin/settings/system-update" },
      ],
    },
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="logo">
        <img
          src="https://hospital.gtechxchange.com/uploads/hospital_content/logo/1.png?1732256459"
          alt="Logo"
        />
      </div>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? "<<" : ">>"}
      </div>

      {menuItems.map((item, index) => (
        <div key={index}>
          <Link
            to={item.link || "#"}
            onClick={
              item.dropdown
                ? (e) => {
                    e.preventDefault();
                    toggleDropdown(index);
                  }
                : null
            }
            className={`menu-item ${location === item.link ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {isExpanded && item.text}
            {item.dropdown && isExpanded && (
              <span className="dropdown-icon">
                {activeDropdown === index ? "▲" : "▼"}
              </span>
            )}
          </Link>

          {item.dropdown && activeDropdown === index && isExpanded && (
            <div className="dropdown">
              {item.dropdown.map((subItem, subIndex) => (
                <Link
                  key={subIndex}
                  to={subItem.link}
                  className={`dropdown-item ${
                    location === subItem.link ? "active" : ""
                  }`}
                >
                  {subItem.text}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
