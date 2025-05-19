export type IEducation = {
  institution: string;
  degree: string;
  startDate: Date | string;
  endDate?: Date | string | null;
  description: string;
};
