import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Protfolio from "../Pages/Protfolio/Protfolio";
import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../Pages/TermsOfUse/TermsOfUse";
import CookiePolicy from "../Pages/CookiePolicy/CookiePolicy";
import RefundPolicy from "../Pages/RefundPolicy/RefundPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/service-details/:serviceId",
        element: <ServiceDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/portfolio",
        element: <Protfolio />,
      },
      {
        path: "/portfolio-details",
        element: <ProtfolioDetails />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
    ],
  },
]);
