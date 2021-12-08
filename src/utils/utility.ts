import { IFilterResult, IProcessus, IRapportAuditData } from "types";
import {
    actions,
    documents,
    enregistrements,
    rapportAudit,
    users
} from "./constants";

export const getStatistiques = (data: IRapportAuditData[]) => {
  const standards = ["NC Mineure", "NC Majeure", "Opportunité d'Amélioration"];
  return data.reduce(
    (acc, curr) => {
      if (curr.rank === standards[0]) {
        acc.minor += 1;
      }
      if (curr.rank === standards[1]) {
        acc.major += 1;
      }
      if (curr.rank === standards[2]) {
        acc.opportunity += 1;
      }
      acc.total += 1;
      return acc;
    },
    { total: 0, minor: 0, major: 0, opportunity: 0 }
  );
};

export const filterAllKindOfData = (
  filter: string,
  currentProcessus: IProcessus
) => {
  const actionsDataResult = actions(currentProcessus).filter((action) => {
    const matcheLabel = action.label
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchResponsableFirstName = action.responsable.firstName
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchResponsableLastName = action.responsable.lastName
      .toLowerCase()
      .includes(filter.toLowerCase());
    return matcheLabel || matchResponsableFirstName || matchResponsableLastName;
  });

  const usersResult = users.filter((user) => {
    const matcheFirstName = user.firstName
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matcheLastName = user.lastName
      .toLowerCase()
      .includes(filter.toLowerCase());
    return matcheFirstName || matcheLastName;
  });

  const rapportAuditResult = rapportAudit(currentProcessus).filter(
    (rapport) => {
      const matcheLabel = rapport.constat
        .toLowerCase()
        .includes(filter.toLowerCase());
      const matcheRank = rapport.rank
        .toLowerCase()
        .includes(filter.toLowerCase());
      return matcheLabel || matcheRank;
    }
  );

  const documentsResult = documents(currentProcessus).filter((document) => {
    const matcheLabel = document.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matcheAuthor = document.author
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchApprobateur = document.approbateur
      .toLowerCase()
      .includes(filter.toLowerCase());
    return matcheLabel || matcheAuthor || matchApprobateur;
  });

  const enregistrementsResult = enregistrements(currentProcessus).filter(
    (enregistrement) => {
      const matcheLabel = enregistrement.title
        .toLowerCase()
        .includes(filter.toLowerCase());
      const matcheAuthor = enregistrement.responsable_classement
        .toLowerCase()
        .includes(filter.toLowerCase());
      const matchModeClassement = enregistrement.mode_classement
        .toLowerCase()
        .includes(filter.toLowerCase());
      return matcheLabel || matcheAuthor || matchModeClassement;
    }
  );

  return {
    actionsDataResult,
    usersResult,
    rapportAuditResult,
    documentsResult,
    enregistrementsResult,
  } as IFilterResult;
};
