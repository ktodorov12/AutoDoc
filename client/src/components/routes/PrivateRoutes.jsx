import { Outlet } from "react-router";

export default function PrivateRoutes() {
  //If there is no use user (document editor should not be accessible)
  //Add logic for different users (<Navigate to="/" />)

  return <Outlet />;
}
