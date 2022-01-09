import Error404 from "@html/templates/404.html";

const routes = {
  "#/": `<h1>Pokemon</h1>`,
  "#/pokemon/": `<h1>Pokemon</h1>`,
  "#/types/": `<h1>Types</h1>`,
  "#/moves/": `<h1>Moves</h1>`,

  Error404: () => Error404,

  "#/pokemon/:id/": `<h1>Pokemon :ID</h1>`,
};

function getPattern(route) {
  // from `#/user/:name` to `#/user/(?<name>\\w+)/`
  let patternString = route.replaceAll(/:(\w+)\/?/gi, "(?<$1>\\w+)/");
  return new RegExp(patternString, "gi");
}

function parseRoutes(routes) {
  let staticRoutes = {};
  let dynamicRoutes = [];

  for (const route in routes) {
    if (!route.includes(":")) {
      staticRoutes[route] = routes[route];
    } else {
      dynamicRoutes.push({
        route,
        view: routes[route],
        pattern: getPattern(route),
      });
    }
  }

  dynamicRoutes = dynamicRoutes.sort((a, b) => b.route.localeCompare(a.route));
  return { staticRoutes, dynamicRoutes };
}

export default parseRoutes(routes);
