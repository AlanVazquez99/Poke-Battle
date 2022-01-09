import routes from "@router/routes";

const contentNode = document.getElementById("content");

function resolveRoute(route) {
  for (const dynamicRoute of routes.dynamicRoutes) {
    let match = route.match(dynamicRoute.pattern);
    if (match) {
      return dynamicRoute.view
    }
  }
}

async function router(route) {
  if (route[route.length - 1] !== "/") {
    route = route + "/";
    location.hash = route;
  }
  let content = routes.staticRoutes[route] ?? resolveRoute(route);
  contentNode.innerHTML = content;
}

export default router;
