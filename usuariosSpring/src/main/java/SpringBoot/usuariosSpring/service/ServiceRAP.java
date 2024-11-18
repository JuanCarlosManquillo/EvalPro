package SpringBoot.usuariosSpring.service;

import SpringBoot.usuariosSpring.entities.Competencia;
import SpringBoot.usuariosSpring.entities.RA;
import SpringBoot.usuariosSpring.repository.ICompetenciaRepository;
import SpringBoot.usuariosSpring.repository.IRARepository;
import SpringBoot.usuariosSpring.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceRAP implements IServiceRAP {

    @Autowired
    private IRARepository raRepository;
    @Autowired
    private ICompetenciaRepository competenciaRepository;

    @Override
    public List<RA> findAll() {
        // Solo devolver RAs con competencias de tipo "Programa"
        return raRepository.findAllByCompetenciaTipoPrograma();
    }

    @Override
    public Optional<RA> findById(int id) {
        // Buscar RA por ID y validar que la competencia sea de tipo "Programa"
        return raRepository.findByIdAndCompetenciaTipoPrograma(id);
    }


    @Override
    public ApiResponse save(RA ra) {
        // Validar que la descripción no sea nula o vacía
        if (ra.getDescripcion() == null || ra.getDescripcion().trim().isEmpty()) {
            return new ApiResponse(false,"El resultado de aprendizaje debe tener una descripción válida.");
        }

        // Validar que la competencia asociada no sea nula
        if (ra.getCompetencia() == null || ra.getCompetencia().getId() == 0) {
            return new ApiResponse(false,"El resultado de aprendizaje debe estar asociado a una competencia válida.");
        }

        // Validar que la competencia exista en la base de datos
        Optional<Competencia> competenciaOptional = competenciaRepository.findById(ra.getCompetencia().getId());
        if (!competenciaOptional.isPresent()) {
            return new ApiResponse(false,"La competencia asociada no existe en el sistema.");
        }

        // Validar que la competencia sea de tipo "Programa"
        Competencia competencia = competenciaOptional.get();
        if (!"Programa".equalsIgnoreCase(competencia.getTipo())) {
            return new ApiResponse(false,"La competencia asociada debe ser de tipo 'Programa'.");
        }
        ra.setCompetencia(competencia);
        // Si pasa las validaciones, guardar el RA
        raRepository.save(ra);
        return new ApiResponse(true, "RA de programa registrada con éxito.");
    }

    // Método para actualizar un RA existente
    @Override
    public ApiResponse update(int id, RA ra) {
        // Validar que el RA exista
        Optional<RA> existingRA = raRepository.findById(id);
        if (!existingRA.isPresent()) {
            return new ApiResponse(false, "El resultado de aprendizaje con ID " + id + " no existe.");
        }

        RA raToUpdate = existingRA.get();

        // Validar que la descripción no sea nula o vacía
        if (ra.getDescripcion() == null || ra.getDescripcion().trim().isEmpty()) {
            return new ApiResponse(false, "La descripción del RA no puede ser nula o vacía.");
        }

        // Verificar que la competencia asociada al RA sea válida y sea de tipo "Programa"
        if (ra.getCompetencia() == null || ra.getCompetencia().getId() == 0) {
            return new ApiResponse(false, "El RA debe estar asociado a una competencia válida.");
        }

        // Validar que la competencia asociada exista y sea de tipo "Programa"
        Optional<Competencia> competenciaOptional = competenciaRepository.findById(ra.getCompetencia().getId());
        if (!competenciaOptional.isPresent()) {
            return new ApiResponse(false, "La competencia asociada no existe.");
        }

        Competencia competencia = competenciaOptional.get();
        if (!"Programa".equalsIgnoreCase(competencia.getTipo())) {
            return new ApiResponse(false, "La competencia asociada debe ser de tipo 'Programa'.");
        }

        // Actualizar el RA con los nuevos valores
        raToUpdate.setDescripcion(ra.getDescripcion());
        raToUpdate.setCompetencia(competencia);

        // Guardar el RA actualizado
        raRepository.save(raToUpdate);
        return new ApiResponse(true, "RA de programa actualizado con éxito.");
    }

}