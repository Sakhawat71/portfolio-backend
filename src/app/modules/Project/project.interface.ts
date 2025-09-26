
export interface IProject {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  backGitUrl?: string;
  highlights: string[];
  category: string;
  isTeam?: boolean;
  teamSize?: number;
  roleInTeam?: string;
  startDate?: Date;
  endDate?: Date;
}