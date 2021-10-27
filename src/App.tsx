import { useDispatch } from "react-redux";
import { setCatalog } from "./redux/effects/Catalog";
import { useEffect } from "react";
import { StyledProductList } from "./components/styled/StyledProductList";

function App() {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(setCatalog());
    }, [dispatch]);
  return (
    <>
      <StyledProductList />
    </>
  );
}

export default App;
