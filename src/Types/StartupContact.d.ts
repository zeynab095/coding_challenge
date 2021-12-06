import { StartupContactsAssociation } from "./Startup";

export interface CreateStartupContactDTO {
  salutation: string;
  name: string;
  email: string;
  phone: string;
  startupId: number;
  title: string;
}

export interface StartupContactDTO {
  salutation: string;
  id: number;
  name: string;
  email: string;
  phone: string;
  startupId: number;
  startup: StartupContactsAssociation;
  title: string;
}

export interface StartupContactsFilterCriteria {
  startupId?: number;
}
