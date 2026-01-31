
export type Language = 'pt' | 'en';

export interface DiagnosisResponse {
  analysis: string;
  recommendations: string[];
  principles: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
