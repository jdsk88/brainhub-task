import { lazy } from "react";
import LazyLoader from "components/Loader";
import MainLayout from "layouts/main";

const EventsView = LazyLoader(lazy(() => import("views/pages/events")));
const main = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/events",
      element: <EventsView />,
    },
  ],
};

export default main;
