import Header from "@/components/Header";
import { RootStateInterface } from "@/store";
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

export default connect((state: RootStateInterface) => ({
  isAuthenticated: authIsAuthenticatedSelector(state),
  login: accountLoginSelector(state),
  name: accountNameSelector(state),
  avatarColor: accountColorSelector(state),
  storageTotalSize: storageTotalSizeSelector(state),
  storageMaxSize: storageMaxSizeSelector(state),
}))(Header);
