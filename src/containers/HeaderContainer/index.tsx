import Header from "@/components/Header";
import { AppDispatch, RootStateInterface } from "@/store";
import { clearAccount } from "@/store/reducers/auth.slice";
import {
  accountColorSelector,
  accountLoginSelector,
  accountNameSelector,
  authIsAuthenticatedSelector,
} from "@/store/selectors/auth";
import {
  storageMaxSizeSelector,
  storageTotalSizeSelector,
} from "@/store/selectors/storage";
import { connect } from "react-redux";

export default connect(
  (state: RootStateInterface) => ({
    isAuthenticated: authIsAuthenticatedSelector(state),
    login: accountLoginSelector(state),
    name: accountNameSelector(state),
    avatarColor: accountColorSelector(state),
    storageTotalSize: storageTotalSizeSelector(state),
    storageMaxSize: storageMaxSizeSelector(state),
  }),
  (dispatch: AppDispatch) => ({
    logout: dispatch(clearAccount()),
  }),
)(Header);