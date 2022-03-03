import { lazy } from "react";
import LazyLoader from "components/Loader";
import MainLayout from "layouts/main";

const EventsView = LazyLoader(lazy(() => import("views/pages/events")));
const EventsTableView = LazyLoader(
  lazy(() => import("views/pages/eventsTable"))
);
const main = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <EventsView />,
    },
    {
      path: "/events/table",
      element: <EventsTableView />,
    },
  ],
};

export default main;
