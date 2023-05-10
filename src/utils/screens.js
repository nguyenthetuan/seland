export const getScreens = (Screen, routes, options) =>
  routes.map((route, index) =>
    options ? (
      <Screen
        key={route.name}
        options={options[index]}
        {...route}
      />
    ) : (
      <Screen
        key={route.name}
        {...route}
      />
    )
  );
