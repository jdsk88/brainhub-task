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
      path: "/events/create",
      element: <EventsAdd />,
    },
    {
      path: "/events/table",
      element: <EventsAdd />,
    },
    {
      path: "/calendar",
      element: <EventsAdd />,
    },
    {
      path: "/contact",
      element: <EventsAdd />,
    },
  ],
};

export default main;
