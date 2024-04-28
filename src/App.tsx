import { FC, useEffect } from "react";
import HeaderContainer from "./containers/HeaderContainer";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchStorageInfo } from "./store/reducers/storage.slice";
import { Flex } from "antd";
import PresentationContainer from "./containers/PresentationContainer";

const App: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchStorageInfo());
    }
  }, [isAuthenticated]);

  return (
    <>
      <HeaderContainer />
      <Flex justify="center" align="center">
        <PresentationContainer />
      </Flex>
    </>
  );
};

export default App;
