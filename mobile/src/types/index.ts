export interface IOrganization {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  uf: string;
}

export interface IIncident {
  id: string;
  title: string;
  description: string;
  value: number;
  organization: IOrganization;
}

export type IRootStack = {
  Incidents: undefined;
  Details: { incident: IIncident } | undefined;
};
