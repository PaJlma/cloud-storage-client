import { AccountInterface } from "@/types/account";

export interface ProfileCardProps {
  account: AccountInterface;
  fetchAccount: () => Promise<void>;
}
