package SpringBoot.usuariosSpring.service;

import SpringBoot.usuariosSpring.entities.Competencia;
import SpringBoot.usuariosSpring.entities.RA;
import SpringBoot.usuariosSpring.utils.ApiResponse;

import java.util.List;
import java.util.Optional;

public interface IServiceCompetenciaP {
    public List<Competencia> findAll() ;

    public Optional<Competencia> findById(int id) ;

    public ApiResponse save(Competencia competencia, List<RA> resultadosAprendizaje);

    public List<RA> getRAsByCompetenciaProgramaId(int competenciaId);

    public ApiResponse editCompetenciaPrograma(int competenciaId, Competencia competenciaActualizada, List<RA> resultadosAprendizaje);

}
