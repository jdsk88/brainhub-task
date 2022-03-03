import { Dashboard, TableRows } from "@mui/icons-material";

const main_items = {
  id: "/",
  type: "container",
  url: "/",
  children: [
    {
      id: "Dashboard",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: Dashboard,
    },
    {
      id: "Table",
      title: "Table",
      type: "item",
      url: "/events/table",
      icon: TableRows,
    },
  ],
};

export default main_items;
