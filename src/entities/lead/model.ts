export const leadStatuses = ["new", "contacted", "quoted", "done"] as const;

export type LeadStatus = (typeof leadStatuses)[number];

export type LeadPhoto = {
  filename: string;
  contentType: string;
  dataBase64?: string;
};

export type Lead = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  area: string | null;
  service: string;
  message: string | null;
  source_page: string | null;
  photos?: string[] | null;
  status: LeadStatus;
};

export type LeadDraft = {
  name: string;
  phone: string;
  email?: string;
  area?: string;
  service: string;
  message?: string;
  source_page?: string;
  photos?: LeadPhoto[];
};
