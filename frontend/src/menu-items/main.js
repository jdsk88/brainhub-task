import { CalendarToday, Dashboard, Mail, TableRows } from "@mui/icons-material";

const main_items = {
  id: "/",
  type: "container",
  url: "/",
  children: [
    {
      id: "/events/dashboard",
      title: "Dashboard",
      type: "item",
      url: "/events/create",
      icon: Dashboard,
    },
    {
      id: "/events/table",
      title: "Table",
      type: "item",
      url: "/events/table",
      icon: TableRows,
    },
    {
      id: "/calendar",
      title: "Calendar",
      type: "item",
      url: "/calendar",
      icon: CalendarToday,
    },
    {
      id: "/contact",
      title: "Contact",
      type: "item",
      url: "/contact",
      icon: Mail,
    },
  ],
};

export default main_items;
