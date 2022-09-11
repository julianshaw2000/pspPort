export interface Userpermit {
  id: number;
  username: string;
  password: string;
  isOwner: boolean;
  isManager: boolean;
  isSuperManager: boolean;
  isActive: boolean;
  message: string;
}
