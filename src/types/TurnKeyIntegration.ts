export interface IntegrationPartner {
  id: number;
  title: string;
  subTitle: string;
  url: string;
}

export interface IntegrationPartners extends Array<IntegrationPartner> {}
