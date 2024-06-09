import { Dispatch, SetStateAction } from "react";
import { BusinessTypeBtnData } from "./BusinessTypeBtn";

export interface IntegrationCardProps {
  title: string;
  subTitle: string;
  active: boolean;
  activeButton: string;
  setBusinessTypeBtn: Dispatch<SetStateAction<BusinessTypeBtnData>>;
}
