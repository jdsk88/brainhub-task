import { Code, Mail, MobileFriendly, TableRows } from "@mui/icons-material";

const main_items = {
  id: "/",
  type: "container",
  url: "/",
  children: [
    {
      id: "/events/create",
      title: "create event",
      type: "item",
      url: "/events/create",
      icon: Code,
    },
    {
      id: "/events/table",
      title: "events table",
      type: "item",
      url: "/events/table",
      icon: MobileFriendly,
    },
    {
      id: "/calendar",
      title: "calendar",
      type: "item",
      url: "/calendar",
      icon: TableRows,
    },
    {
      id: "/contact",
      title: "contact",
      type: "item",
      url: "/contact",
      icon: Mail,
    },
  ],
};

export default main_items;
