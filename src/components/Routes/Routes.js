import { Route, useLocation } from "react-router";
import Detail from "../Book/Detail/Detail";

const Routes = () => {
  
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
       {background && <Route path="/detail/:rank" children={<Detail />} />}
    </>
  );
};

export default Routes;