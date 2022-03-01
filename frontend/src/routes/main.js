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
      path: "/events/create",
      element: <EventsView />,
    },
       {
      path: "/events/table",
      element: <EventsTableView />,
    },
    {
      path: "/calendar",
      element: <h1>contact</h1>,
    },
    {
      path: "/contact",
      element: <h1>contact</h1>,
    },
  ],
};

export default main;
