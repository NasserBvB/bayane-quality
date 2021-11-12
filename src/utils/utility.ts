import { IRapportAuditData } from "types";

export const getStatistiques = (data: IRapportAuditData[]) => {
    const standards = ["NC Mineure","NC Majeure","Opportunité d'Amélioration",]
    return data.reduce((acc, curr) => {
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
    }, { total: 0, minor: 0, major: 0, opportunity: 0 });
}