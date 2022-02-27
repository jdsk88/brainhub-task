import { lazy } from "react";
import LazyLoader from "components/Loader";
import MainLayout from "layouts/main";

const EventsView = LazyLoader(lazy(() => import("views/pages/events")));
const EventsAdd = LazyLoader(lazy(() => import("views/pages/eventsAdd")));
const main = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/events",
      element: <EventsView />,
    },
    {
      path: "/events/add",
      element: <EventsAdd />,
    },
  ],
};

export default main;
