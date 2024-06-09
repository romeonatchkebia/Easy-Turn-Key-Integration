export interface BusinessTypeCardProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

export interface BusinessTypeBtn {
  id: number;
  title: string;
  partners: string[];
}

export interface BusinessTypeBtnData extends Array<BusinessTypeBtn> {}
