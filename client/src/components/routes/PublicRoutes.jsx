import { Outlet } from "react-router";

export default function PublicRoutes() {
  //If there is user (logic, register should not be accessible)
  //Add logic for different users (<Navigate to="/" />)

  return <Outlet />;
}
