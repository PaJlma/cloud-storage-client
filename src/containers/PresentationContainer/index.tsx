import Presentation from "@/components/Home/Presentation";
import { RootStateInterface } from "@/store";
import { authIsAuthenticatedSelector } from "@/store/selectors/auth";
import { connect } from "react-redux";

export default connect((state: RootStateInterface) => ({
  isAuthenticated: authIsAuthenticatedSelector(state),
}))(Presentation);
