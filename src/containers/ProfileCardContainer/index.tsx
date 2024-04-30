import ProfileCard from "@/components/ProfileCard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchAccount } from "@/store/reducers/auth.slice";
import { FC } from "react";

const ProfileCardContainer: FC = () => {
  const { account } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <ProfileCard
      account={account}
      fetchAccount={async () => {
        await dispatch(fetchAccount());
      }}
    />
  );
};

export default ProfileCardContainer;
