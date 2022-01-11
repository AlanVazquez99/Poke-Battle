import routes from "@router/routes";

const contentNode = document.getElementById("content");

function resolveRoute(route) {
  for (const dynamicRoute of routes.dynamicRoutes) {
    let match = route.match(dynamicRoute.pattern);
    if (match) {
      return dynamicRoute.view;
    }
  }
}

async function router(route) {
  if (route[route.length - 1] !== "/") {
    route = route + "/";
    location.hash = route;
  }

  let view =
    routes.staticRoutes[route] ??
    resolveRoute(route) ??
    routes.staticRoutes["Error404"];

  let content = typeof view === "string" ? view : await view();
  contentNode.innerHTML = content;
}

export default router;
