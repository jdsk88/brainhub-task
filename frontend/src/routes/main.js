import { lazy } from "react";
import LazyLoader from "components/Loader";
import MainLayout from "layouts/main";

const Test = LazyLoader(lazy(() => import("views/pages/test")));
const EventsView = LazyLoader(lazy(() => import("views/pages/events")));
const EventsAdd = LazyLoader(lazy(() => import("views/pages/eventsAdd")));
const EventsTableView = LazyLoader(
  lazy(() => import("views/pages/eventsTable"))
);
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
      element: <EventsTableView />,
    },
    {
      path: "/calendar",
      element: <EventsAdd />,
    },
    {
      path: "/contact",
      element: <Test />,
    },
  ],
};

export default main;
