package SpringBoot.usuariosSpring.repository;

import SpringBoot.usuariosSpring.entities.Competencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ICompetenciaRepository extends JpaRepository<Competencia, Integer> {
    // Obtener todas las competencias de tipo 'programa'
    @Query("SELECT c FROM Competencia c WHERE c.tipo = 'programa'")
    List<Competencia> findAllProgramas();

    // Obtener una competencia específica de tipo 'programa'
    @Query("SELECT c FROM Competencia c WHERE c.id = :id AND c.tipo = 'programa'")
    Optional<Competencia> findByIdAndTipoPrograma(@Param("id") int id);
}
