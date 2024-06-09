import { Dispatch, SetStateAction } from "react";
import { IntegrationPartners } from "./TurnKeyIntegration";
import { BusinessTypeBtnData } from "./BusinessTypeBtn";

export interface BodyProps {
  handleIsIntegrationActive: (title: string) => boolean;
  setBusinessTypeBtn: Dispatch<SetStateAction<BusinessTypeBtnData>>;
  integrationPartners: IntegrationPartners;
  activeButton: string;
}
