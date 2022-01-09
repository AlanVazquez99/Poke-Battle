const routes = {
  "#/": `<h1>Welcome</h1>`,
  "#/pokemon/": `<h1>Pokemon</h1>`,
  "#/types/": `<h1>Types</h1>`,
  "#/moves/": `<h1>Moves</h1>`,

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
    if (route.includes(":")) {
      const dynamicRoute = {
        route,
        view: routes[route],
        pattern: getPattern(route),
      };

      dynamicRoutes.push(dynamicRoute);
    } else {
      staticRoutes[route] = routes[route];
    }
  }
  const newRoutes = {
    staticRoutes,
    dynamicRoutes: dynamicRoutes.sort((a, b) => b.route.localeCompare(a.route)),
  };
  return newRoutes;
}

export default parseRoutes(routes);
