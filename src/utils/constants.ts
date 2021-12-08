import faker from "faker";
import {
  IAction,
  IActivite,
  IDocumentInterne,
  IElements_entree,
  IEnregistrement,
  IGlobalState,
  IHistorique_version,
  IIndicateur,
  IInterpretations,
  IProcessus,
  IRapportAuditData,
  IUser,
} from "types";

export const processuses = new Array(10).fill(0).map<IProcessus>((_, i) => ({
  code: faker.datatype.uuid(),
  description: faker.lorem.paragraph(),
  title: faker.name.title(),
  id: faker.datatype.uuid(),
  createdAt: faker.date.recent().toISOString(),
  updatedAt: faker.date.recent().toISOString(),
  pilote: [
    `${faker.name.jobTitle()}`,
    `${faker.name.jobTitle()}`,
    `${faker.name.jobTitle()}`,
  ],
  historiques_versions: new Array(10)
    .fill(0)
    .map<IHistorique_version>((_, i) => ({
      date: faker.date.recent().toISOString(),
      descriptifs: faker.lorem.paragraph(),
      version: `version ${i + 1}`,
    })),
  finalités: new Array(10)
    .fill(0)
    .map<string>((_, i) => `${faker.lorem.sentence()}`),
  sponsor: new Array(10)
    .fill(0)
    .map<string>((_, i) => `${faker.name.jobTitle()}`),
  animateurs: new Array(10)
    .fill(0)
    .map<string>((_, i) => `${faker.name.jobTitle()}`),
  elements_entrees: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  elements_sorties: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  besoin_communication: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  besoin_formation: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  besoin_recrutement: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  besoin_demande_administrative: new Array(10)
    .fill(0)
    .map<IElements_entree>((_, i) => ({
      fournisseur: faker.company.companyName(),
      title: faker.name.title(),
    })),
  besoin_evaluation: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  besoin_achat: new Array(10).fill(0).map<IElements_entree>((_, i) => ({
    fournisseur: faker.company.companyName(),
    title: faker.name.title(),
  })),
  activites: new Array(10).fill(0).map<IActivite>((_, i) => ({
    activity: faker.lorem.sentence(),
    description: new Array(5)
      .fill(0)
      .map<string>((_, i) => `${faker.lorem.sentence()}`),
    reference: new Array(5)
      .fill(0)
      .map<string>((_, i) => `${faker.lorem.sentence()}`),
    responsabilite: new Array(5)
      .fill(0)
      .map<string>((_, i) => `${faker.lorem.sentence()}`),
  })),
}));

export const users = new Array(10).fill(0).map<IUser>((_, i) => ({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  id: faker.datatype.uuid(),
  lastName: faker.name.lastName(),
  login: faker.internet.userName(),
  password: faker.internet.password(),
  createdAt: faker.date.recent().toISOString(),
  updatedAt: faker.date.recent().toISOString(),
}));

export const actions = (processus: IProcessus) =>
  new Array(50).fill(0).map<IAction>(() => ({
    date_action: faker.date.recent().toISOString(),
    description: faker.lorem.sentence(),
    nature_action: faker.random.arrayElement([
      "Amélioration Continue",
      "Action d'amélioration",
      "Action face aux risques",
    ]),
    origine_action: faker.lorem.sentence(),
    label: faker.lorem.sentence(),
    responsable: users[faker.datatype.number(users.length - 1)],
    autres_entities: faker.lorem.sentence(),
    delai: `${faker.date.month({ abbr: true })}-${faker.datatype.number({
      max: 30,
      min: 1,
    })}`,
    date_realisation: faker.date.recent().toISOString(),
    delai_evaluation_efficacite: "6 mois",
    commentaires: new Array(faker.random.number({ min: 1, max: 5 }))
      .fill(0)
      .map(() => ({
        author: faker.name.findName(),
        comment: faker.lorem.sentence(),
        date: faker.date.recent().toISOString(),
      })),
    priorite: faker.random.arrayElement(["A", "B", "C"]),
    avancement: faker.random.arrayElement([
      "En cours",
      "Terminé",
      "En attente",
    ]),
    efficacite: faker.random.arrayElement(["Oui", "Non"]),
    critere_efficacite: "Opérations transferées entre filiales",
    analyse_causes: faker.lorem.sentence(),
    number_action: faker.datatype.number() + "",
    processus,
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    id: faker.datatype.uuid(),
  }));

export const tableauBord = (processus: IProcessus, actions: IAction[]) =>
  new Array(100).fill(0).map<IIndicateur>((item, idx) => ({
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    axe: `Axe ${idx + 1}`,
    title: faker.name.title(),
    type: faker.random.arrayElement(["Surveillance", "PL"]),
    objectif: {
      annee: "2018",
      cible: `${faker.datatype.number({ max: 99, min: 20 })}%`,
      seuil_max: `${faker.datatype.number({ max: 99, min: 20 })}%`,
      seuil_min: `${faker.datatype.number({ max: 99, min: 20 })}%`,
    },
    moyenne: {
      annee: "2018",
      valeur: `${faker.datatype.number({ max: 99, min: 20 })}%`,
    },
    resultat: `${faker.datatype.number({ max: 99, min: 20 })}%`,
    evolution_tendance: `${faker.random.arrayElement([
      "+",
      "-",
    ])} ${faker.datatype.number({ max: 99, min: 20 })}%`,
    interpretations: new Array(faker.datatype.number({ max: 3, min: 1 }))
      .fill(0)
      .map<IInterpretations>((item) => ({
        action:
          actions[faker.datatype.number({ max: actions.length - 1, min: 0 })],
        content: faker.lorem.paragraph(),
        createdAt: faker.date.recent().toISOString(),
        updatedAt: faker.date.recent().toISOString(),
        id: faker.datatype.uuid(),
      })),
    processus,
  }));

export const rapportAudit = (processus: IProcessus) =>
  new Array(1000).fill(0).map<IRapportAuditData>((item, idx) => ({
    id: faker.datatype.uuid(),
    rank: faker.random.arrayElement([
      "NC Mineure",
      "NC Majeure",
      "Opportunité d'Amélioration",
    ]),
    constat: faker.lorem.sentence(),
    refNorme: `${faker.datatype.number({
      max: 10,
      min: 1,
    })}.${faker.datatype.number({ max: 10, min: 1 })}`,
    causes: faker.random.arrayElement(["Méthode", "Ressource Humaine"]),
    actions: faker.lorem.sentence(),
    responsable: users[faker.random.number({ max: users.length - 1, min: 0 })],
    delai: faker.random.arrayElement([
      "PA du PIDS 2019",
      "4eme trim 2018",
      "levé",
    ]),
    date_limite: faker.date.future().toISOString(),
    processus,
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  }));

const elements = [
  [
    "Les indicateurs du processus",
    "Tous les indicateurs sont jugés pertinents.",
    "Certains indicateurs doivent être revus ou supprimés",
  ],
  [
    "Les résultats des processus",
    "Tous les indicateurs font l'objet d'un calcul fiable des données",
    "Certains indicateurs ne font pas l'objet d'un calcul fiable des données",
  ],
  [
    "Les objectifs des processus",
    "Tous les indicateurs font l'objet d'une définition d'objectifs pertinents",
    "Certains indicateurs ne font pas l'objectif d'une définition d'objectifs pertinents",
  ],
  [
    "Les actions d'améliorations",
    "La majorité des actions d'améliorations sont planifiées et suivi au niveau du JAP",
    "Une partie importante des actions d'améliorations ne sont pas planifiées ni suivi au niveau du JAP",
  ],
  [
    "Les non confomités du processus (clients, produits, audits,..)",
    "La majorité des réclamations clients, des non-conformités (contrôle & audit) et des insatisfactions clients sont identifiées et prisent en charge dans le JAP",
    "Une partie importante des réclamations clients, des non-conformités (contrôle & audit) et des insatisfactions client ne sont pas identifiées ni prisent en charge dans le JAP",
  ],
  [
    "Les éléments de maitrise du processus (Risques & connaissances)",
    "La majorité des risques et connaissances du processus sont adaptés au processus",
    "Une partie importante des risques et connaissances du processus ne sont pas adaptés au processus (n'ont pas fait l'objet d'une revue ou d'une planification)",
  ],
  [
    "Les description du processus (activités, documentation, rôle et responsabilités, ...)",
    "La description du processus est conforme à la pratique (y compris les dpcuments assosciés)",
    "Des éléments décrits et associés au processus ne sont pas adaptés (n'ont pas fait l'objet d'une revue ou d'une planification)",
  ],
];

export const revue = (processus: IProcessus) =>
  new Array(7).fill(0).map((_, idx) => ({
    processus,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    element: elements[idx][0],
    saisfaisant: elements[idx][1],
    nonSatisfaisant: elements[idx][2],
    decisions: new Array(faker.datatype.number({ max: 3, min: 1 }))
      .fill(0)
      .map(() => faker.lorem.sentence()),
  }));

export const enregistrements = (processus: IProcessus) =>
  new Array(1000).fill(0).map<IEnregistrement>((_, idx) => ({
    id: faker.datatype.uuid(),
    processus,
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    duree_classement: `${faker.random.arrayElement([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ])} ${faker.random.arrayElement(["jours", "mois", "ans"])}`,
    lieu_classement: faker.address.city(),
    mode_classement: faker.random.arrayElement([
      "Physique et Numérique",
      "Physique",
      "Numérique",
    ]),
    responsable_classement: faker.name.firstName(),
    title: faker.lorem.sentence(),
  }));

export const documents = (processus: IProcessus) =>
  new Array(1000).fill(0).map<IDocumentInterne>((_, idx) => ({
    id: faker.datatype.uuid(),
    processus,
    approbateur: faker.name.firstName(),
    author: faker.name.firstName(),
    code: faker.datatype.uuid(),
    date_creation: faker.date.recent().toISOString(),
    diffusion: faker.random.arrayElement(["Serveur //SMQ"]),
    title: faker.lorem.sentence(),
    verificateur: faker.name.firstName(),
    version: faker.random.arrayElement([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ]),
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  }));

export const initialState: IGlobalState = {
  processuses,
  annee: new Date().getFullYear(),
  users,
  currentProcessus: processuses[0],
  actions: actions(processuses[0]),
  periode: {
    start: 1,
    end: 12,
  },
  state: "signin",
  user: users[0],
  changeAnnee: () => {},
  changePeriode: () => {},
  changeProcessus: () => {},
  changeUser: () => {},
  error: null,
  setError: () => {},
  signin: () => {},
  signout: () => {},
  addAction: () => {},
  token: null,
  searching: false,
  toggleSearching: () => {},
};
