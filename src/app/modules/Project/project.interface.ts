
export interface IProject {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  
  isTeam?: boolean;
  teamSize?: number;
  roleInTeam?: string;
  startDate?: Date;
  endDate?: Date;
}