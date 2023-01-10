import { Route, Routes } from 'react-router-dom';
import routes from "../routes/routes";

const Main = () => {
  const publicRoutes = routes.filter((route) => route.role.includes('*'))
  return (
    <>
      <Routes>
        {publicRoutes.map((route, key) => (
          <Route key={key} path={route.path}>
            {route.children ? (
              route.children.map((subRoute, i) =>
                subRoute.path === "/" ? (
                  <Route key={i} index={true} element={<subRoute.element />} />
                ) : (
                  <Route
                    key={i}
                    index={false}
                    path={subRoute.path}
                    element={<subRoute.element />}
                  />
                )
              )
            ) : (
              <Route path={route.path} element={<route.element />} />
            )}
          </Route>
        ))}
      </Routes>
    </>
  )
}

export default Main