export interface HeaderProps {
  isAuthenticated: boolean;
  login: string;
  name: string;
  avatarColor: string;
  storageTotalSize: number;
  storageMaxSize: number;
  storageIsInfoFetching?: boolean;
}
