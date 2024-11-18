package SpringBoot.usuariosSpring.repository;

import SpringBoot.usuariosSpring.entities.RA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IRARepository extends JpaRepository<RA, Integer> {
    @Query("SELECT ra FROM RA ra WHERE ra.competencia.id = :competenciaId")
    List<RA> findByCompetenciaId(@Param("competenciaId") int competenciaId);
    // Consulta personalizada para obtener todas las RAs con competencias de tipo "Programa"
    @Query("SELECT ra FROM RA ra WHERE ra.competencia.tipo = 'Programa'")
    List<RA> findAllByCompetenciaTipoPrograma();

    // Consulta personalizada para encontrar un RA por ID y verificar que su competencia sea de tipo "Programa"
    @Query("SELECT ra FROM RA ra WHERE ra.id = :id AND ra.competencia.tipo = 'Programa'")
    Optional<RA> findByIdAndCompetenciaTipoPrograma(@Param("id") int id);
}
