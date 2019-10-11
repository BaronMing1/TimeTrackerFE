import { SprintType } from './sprintType';

export interface Sprint {
  sprintType: SprintType;
  progress: number;
  description: string;
  notify: boolean;
  user: string;
  createdAt: Date;
  startedAt: string;
  finishedAt: string;
}
