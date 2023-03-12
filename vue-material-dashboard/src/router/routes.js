import DashboardLayout from "@/pages/Dashboard/Layout/Sidebar.vue";
import AuthLayout from "@/pages/Dashboard/Layout/AuthLayout.vue";

// Dashboard pages
import Dashboard from "@/pages/Dashboard/Pages/Dashboard.vue";
// Profile
import UserProfile from "@/pages/Dashboard/Examples/UserProfile.vue";

// User Management
import ListUserPage from "@/pages/Dashboard/Examples/UserManagement/ListUserPage.vue";

// Pages
import Login from "@/pages/Dashboard/Pages/Auth/Login.vue";
import Register from "@/pages/Dashboard/Pages/Auth/Register.vue";

// Components pages
import Notifications from "@/pages/Dashboard/Components/Notifications.vue";
import Icons from "@/pages/Dashboard/Components/Icons.vue";
import Typography from "@/pages/Dashboard/Components/Typography.vue";

// TableList pages
import RegularTables from "@/pages/Dashboard/Tables/RegularTables.vue";

//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";
import DashboardDEV from "@/pages/Dashboard/Pages/DEV/DashboardDEV.vue";
import Manual from "@/pages/Dashboard/Pages/DataInput/Manual.vue";
import SmartDeviceLink from "@/pages/Dashboard/Pages/DataInput/SmartDeviceLink.vue";
import moodInput from "@/pages/Dashboard/Pages/MoodInput.vue";
import userProfile from "@/pages/Dashboard/Examples/UserProfile.vue";
import viewData from "@/pages/Dashboard/Pages/ViewData.vue";
import weeklyReport from "@/pages/Dashboard/Pages/WeeklyReport.vue";

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/notification",
  name: "Components",
  children: [
    {
      path: "table",
      name: "Table",
      components: { default: RegularTables },
      meta: { middleware: auth }
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography },
      meta: { middleware: auth }
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons },
      meta: { middleware: auth }
    },
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications },
      meta: { middleware: auth }
    },

  ]
};

let dataInput = {
  path: "/data-input",
  component: DashboardLayout,
  name: "Data Input",
  children: [
    {
      path: "manual",
      name: "Manual",
      components: { default: Manual },
      meta: { middleware: auth }
    },
    {
      path: "smart-device",
      name: "Smart Device",
      components: { default: SmartDeviceLink },
      meta: { middleware: auth }
    }
  ]
};

let authPages = {
  path: "/",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { middleware: guest }
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { middleware: guest }
    }
  ]
};

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    name: "Home"
  },
  {
    path: "/",
    component: DashboardLayout,
    meta: { middleware: auth },
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        components: { default: Dashboard },
        meta: { middleware: auth }
      },
      {
        path: "dashboardDev",
        name: "DashboardDev",
        components: { default: DashboardDEV },
        meta: { middleware: auth }
      },
      {
        path: "mood-input",
        name: "Mood Input",
        components: { default: moodInput },
        meta: { middleware: auth }
      },
      {
        path: "user-profile",
        name: "User Profile",
        components: { default: userProfile },
        meta: { middleware: auth }
      },
      {
        path: "view-data",
        name: "View Data",
        components: { default: viewData },
        meta: { middleware: auth }
      },
      {
        path: "weekly-report",
        name: "Weekly Report",
        components: { default: weeklyReport },
        meta: { middleware: auth }
      }
    ]
  },
  componentsMenu,
  dataInput,
  authPages
];

export default routes;
