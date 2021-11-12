export interface ICommon {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}
export type IVariant = "outline" | "filled" | "text" | "link";
export type IColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

export interface IUser {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  email: string;
}

export type ISignIn = { token: string; user: IUser };

export type IGlobalState = {
  user: IUser | null;
  token: string | null;
  state: "signin" | "signout";
  signin: ({ token, user }: ISignIn) => void;
  signout: () => void;
  error: unknown | null;
  setError: (erro: unknown) => void;
  currentProcessus: IProcessus;
  processuses: IProcessus[];
  users: IUser[];
  annee: number;
  periode: {
    start: number;
    end: number;
  };
  changeAnnee: (annee: number) => void;
  changePeriode: (periode: { start: number; end: number }) => void;
  changeProcessus: (processus: IProcessus) => void;
  changeUser: (user: IUser) => void;
};

export type ILoginForm = {
  username: string;
  password: string;
};

export type IRegisterForm = {
  nom: string;
  prenom: string;
  username: string;
  password: string;
};

export interface IProject {
  id: string;
  owner: string;
  project: string;
  duree: string;
  date_debut: string;
  date_fin: string;
  date_fin_revisee: string;
  av_reel: string;
  av_planifie: string;
  av_mois_moins_1: string;
  budget: number;
  statut: boolean;
  actions: IAction[];
  objectifs: IObjectif;
  problematiques: string[];
  decisions: string[];
  commentaires: IComment[];
}

export interface IObjectif {
  title: string;
  items: string[];
}

export interface IComment {
  author: string;
  comment: string;
  date: string;
}

export interface IProcessus extends ICommon {
  title: string;
  description: string;
  code: string;
  pilote: string[];
}

export type IPriorite = "A" | "B" | "C" | "D";

export interface IAction extends ICommon {
  processus: IProcessus;
  number_action: string;
  date_action: string;
  description: string;
  nature_action: string;
  origine_action: string;
  analyse_causes: string;
  label: string;
  responsable: IUser;
  autres_entities: string;
  delai: string;
  date_realisation: string;
  delai_evaluation_efficacite: string;
  efficacite: string;
  commentaires: IComment[];
  priorite: IPriorite;
  avancement: string;
}

export interface IIndicateur extends ICommon {
  processus: IProcessus;
  axe: string;
  title: string;
  type: string;
  objectif: {
    annee: string;
    cible: string;
    seuil_min: string;
    seuil_max: string;
  };
  moyenne: {
    annee: string;
    valeur: string;
  };
  resultat: string;
  evolution_tendance: string;
  interpretations: IInterpretations[];
}

export interface IInterpretations extends ICommon {
  content: string;
  action: IAction;
}

export interface IRapportAuditData {
  id: string;
  rank: string;
  constat: string;
  refNorme: string;
  causes: string;
  actions: string;
  responsable: IUser;
  delai: string;
  date_limite: string;
  processus: IProcessus;
  createdAt: string;
  updatedAt: string;
}
