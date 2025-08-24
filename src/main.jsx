import { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useRouter,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import "./styles.css";
import reportWebVitals from "./reportWebVitals";

import { Landing } from "./routes/index";
import Header from "./components/header";
import Footer from "./components/footer";
import MeetOurTeam from "./routes/MeetOurTeam";
import ServicesLayout from "./routes/services/index";
import Service from "./routes/services/$service";
import TermsOfService from "./routes/termsOfService";
import PrivacyPolicy from "./routes/privacyPolicy";
import BookAnAppointment from "./routes/bookAnAppointment";
import FacilityTour from "./routes/facilityTour";
import Login from "./routes/login";
import ContactUs from "./routes/ContactUs";
import AboutUs from "./routes/AboutUs";

/** 🔔 Fullscreen 404 popup */
function NotFoundOverlay() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(false);
      if (window.history.length > 1) {
        router.history.go(-1);
      } else {
        router.navigate({ to: "/" });
      }
    }, 3000);
    return () => clearTimeout(t);
  }, [router]);

  if (!open) return null;

  return (
    <div className=" inset-0 z-[9999] flex items-center justify-center bg-[url('/bg-100-vh.jpg')] bg-fixed py-40 min-h-screen pb-6">
      <div className="rounded-2xl bg-white p-4 shadow-xl max-w-lg w-[92%] text-center">
        <img
          src="/logo2.png"
          alt="Dr. Preeti's Bright Eye Care Hospital-Logo"
        />
        <p className="text-red-600 font-semibold text-2xl">
          The page you tried to open doesn’t exist.
        </p>
        <p className="text-sm opacity-70 mt-1">Please check the URL.</p>
      </div>
    </div>
  );
}

/** 🌳 Root route */
const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: NotFoundOverlay,
});

/** 🧩 Layout with Header/Footer */
const appLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "app-layout",
  component: () => (
    <div className="flex flex-1 flex-col h-[100vh] w-full">
      <Header />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});

/** --- Pages --- */
const indexRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/",
  component: Landing,
});
const meetOurTeamRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/meetourteam",
  component: MeetOurTeam,
});
const servicesRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/services",
  component: ServicesLayout,
});
const serviceRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/services/$service",
  component: Service,
});
const termsOfServiceRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/termsofservices",
  component: TermsOfService,
});
const privacyPolicyRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/privacypolicy",
  component: PrivacyPolicy,
});
const bookAnAppointmentRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/bookanappointment",
  component: BookAnAppointment,
});
const facilityTourRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/facilityTour",
  component: FacilityTour,
});
const loginRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/login",
  component: Login,
});
const ContactUsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/ContactUs",
  component: ContactUs,
});
const AboutUsRoute = createRoute({
  getParentRoute: () => appLayoutRoute,
  path: "/AboutUs",
  component: AboutUs,
});

/** Build route tree */
appLayoutRoute.addChildren([
  indexRoute,
  meetOurTeamRoute,
  servicesRoute,
  serviceRoute,
  termsOfServiceRoute,
  privacyPolicyRoute,
  bookAnAppointmentRoute,
  facilityTourRoute,
  loginRoute,
  ContactUsRoute,
  AboutUsRoute,
]);

const routeTree = rootRoute.addChildren([appLayoutRoute]);

const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  notFoundMode: "root",
});

/** 📊 Google Analytics Listener */
function AnalyticsListener({ router }) {
  useEffect(() => {
    const unsub = router.subscribe("onBeforeLoad", (event) => {
      if (window.gtag) {
        window.gtag("config", "G-K0CVCQHWH7", {
          page_path: event.toLocation.pathname,
        });
      }
    });
    return () => unsub?.();
  }, [router]);

  return null;
}

const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router}>
          <AnalyticsListener router={router} />
        </RouterProvider>
      </HelmetProvider>
    </StrictMode>
  );
}

reportWebVitals();
