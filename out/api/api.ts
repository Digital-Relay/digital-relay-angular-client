export * from './auth.service';
import { AuthService } from './auth.service';
export * from './teams.service';
import { TeamsService } from './teams.service';
export const APIS = [AuthService, TeamsService];
