export const getScreens = (Screen, routes) =>
  routes.map((route, index) => (
    <Screen
      key={route.name}
      {...route}
    />
  ));
