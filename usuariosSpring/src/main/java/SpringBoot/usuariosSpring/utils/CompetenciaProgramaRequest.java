package SpringBoot.usuariosSpring.utils;

import SpringBoot.usuariosSpring.entities.Competencia;
import SpringBoot.usuariosSpring.entities.RA;

import java.util.List;

public class CompetenciaProgramaRequest {
    private Competencia competencia;
    private List<RA> resultadosAprendizaje;

    // Getters y Setters
    public Competencia getCompetencia() {
        return competencia;
    }

    public void setCompetencia(Competencia competencia) {
        this.competencia = competencia;
    }

    public List<RA> getResultadosAprendizaje() {
        return resultadosAprendizaje;
    }

    public void setResultadosAprendizaje(List<RA> resultadosAprendizaje) {
        this.resultadosAprendizaje = resultadosAprendizaje;
    }
}
