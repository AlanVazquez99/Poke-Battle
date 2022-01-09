import routes from "@router/routes";

const contentNode = document.getElementById("content");

function resolveRoute(route) {
  for (const dynamicRoute of routes.dynamicRoutes) {
    let match = route.match(dynamicRoute.pattern);
    if (match) {
      const view = dynamicRoute.view;
      return typeof view === "string" ? view : view();
    }
  }
}

function router(route) {
  if (route[route.length - 1] !== "/") {
    route = route + "/";
    location.hash = route;
  }

  let content =
    routes.staticRoutes[route] ??
    resolveRoute(route) ??
    routes.staticRoutes["Error404"]();

  contentNode.innerHTML = content;
}

export default router;
