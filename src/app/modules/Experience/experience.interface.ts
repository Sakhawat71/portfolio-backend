export interface IExperience {
  company: string;
  position: string;
  startDate: Date | string;
  endDate?: Date | string | null;
  description: string;
}
