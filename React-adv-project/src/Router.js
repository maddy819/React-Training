import { createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import EventDetailPage, { EventLoader, EventDelete } from "./pages/EventDetail";
import Events, { EventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage, { newEventPost } from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: EventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventLoader,
            children: [
              {
                path: "",
                element: <EventDetailPage />,
                action: EventDelete,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventPost },
        ],
      },
    ],
  },
]);

export default Router;
