import { Dispatch, SetStateAction } from "react";
import { BusinessTypeBtnData } from "./BusinessTypeBtn";

export interface IntegrationCardProps {
  url: string;
  title: string;
  subTitle: string;
  active: boolean;
  activeButton: string;
  setBusinessTypeBtn: Dispatch<SetStateAction<BusinessTypeBtnData>>;
}
