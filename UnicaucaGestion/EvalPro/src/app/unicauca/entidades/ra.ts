import { Competencia } from "./competencia";
import { Rubrica } from "./rubrica";

export class RA {
    id!: number;
    descripcion!: string;
    deshabilitado!: boolean;
    rubricaList!: Rubrica[];
    competencia!: Competencia;
}
