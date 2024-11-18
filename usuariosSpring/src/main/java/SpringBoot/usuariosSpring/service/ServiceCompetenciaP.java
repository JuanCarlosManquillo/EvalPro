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
public class ServiceCompetenciaP implements IServiceCompetenciaP {

    @Autowired
    private ICompetenciaRepository competenciaRepository;

    @Autowired
    private IRARepository raRepository;

    public List<Competencia> findAll() {
        return competenciaRepository.findAllProgramas();
    }

    public Optional<Competencia> findById(int id) {
        return competenciaRepository.findByIdAndTipoPrograma(id);
    }

    public List<RA> getRAsByCompetenciaProgramaId(int competenciaId) {
        Optional<Competencia> competencia = competenciaRepository.findById(competenciaId);

        // Validar que exista y que sea de tipo "programa"
        if (competencia.isPresent() && "programa".equalsIgnoreCase(competencia.get().getTipo())) {
            return raRepository.findByCompetenciaId(competenciaId);
        }

        // Si no existe o no es de tipo "programa", lanzar una excepción o retornar lista vacía
        throw new IllegalArgumentException("La competencia no existe o no es de tipo programa.");
    }

    /**
     * Método para crear una competencia de programa.
     * Realiza las validaciones necesarias y crea los resultados de aprendizaje asociados.
     */
    public ApiResponse save(Competencia competencia, List<RA> resultadosAprendizaje) {

        // Validación de los campos obligatorios
        if (competencia.getDescripcion() == null || competencia.getDescripcion().isEmpty()) {
            return new ApiResponse(false, "La descripción de la competencia es obligatoria.");
        }
        if (competencia.getNivel() == null || competencia.getNivel().isEmpty()) {
            return new ApiResponse(false, "El nivel de la competencia es obligatorio.");
        }

        // Validación del nivel
        if (!(competencia.getNivel().equals("básico") || competencia.getNivel().equals("intermedio") || competencia.getNivel().equals("avanzado"))) {
            return new ApiResponse(false, "El nivel de la competencia debe ser uno de los siguientes: básico, intermedio, avanzado.");
        }

        // Validar que el tipo de la competencia sea "Programa"
        if (competencia.getTipo() == null || !competencia.getTipo().equalsIgnoreCase("Programa")) {
            return new ApiResponse(false, "El tipo de la competencia debe ser 'Programa'.");
        }


        // Validación de al menos un resultado de aprendizaje
        if (resultadosAprendizaje == null || resultadosAprendizaje.isEmpty()) {
            return new ApiResponse(false, "Debe asociar al menos un resultado de aprendizaje.");
        }

        // Validar los resultados de aprendizaje antes de guardarlos
        ApiResponse validacionRA = validarResultadosAprendizaje(resultadosAprendizaje);
        if (!validacionRA.isSuccess()) {
            return validacionRA;
        }

        // Guardar la competencia
        competencia = competenciaRepository.save(competencia);
        // Crear los resultados de aprendizaje
        for (RA ra : resultadosAprendizaje) {
            // Asignar la competencia recién creada a cada RA
            ra.setCompetencia(competencia);
            // Creamos los RA nuevos y los guardamos en la base de datos
            raRepository.save(ra);
        }


        return new ApiResponse(true, "Competencia de programa registrada con éxito.");
    }

    /**
     * Método para editar una competencia de tipo programa.
     * Realiza las validaciones necesarias antes de actualizar la competencia.
     */
    public ApiResponse editCompetenciaPrograma(int competenciaId, Competencia competenciaActualizada, List<RA> resultadosAprendizaje) {

        // Verificar si la competencia existe y es de tipo "Programa"
        Optional<Competencia> competenciaOpt = competenciaRepository.findByIdAndTipoPrograma(competenciaId);
        if (!competenciaOpt.isPresent()) {
            return new ApiResponse(false, "La competencia no existe o no es de tipo 'Programa'.");
        }

        Competencia competencia = competenciaOpt.get();

        // Validar la descripción de la competencia
        if (competenciaActualizada.getDescripcion() == null || competenciaActualizada.getDescripcion().isEmpty()) {
            return new ApiResponse(false, "La descripción de la competencia es obligatoria.");
        }

        // Validar el nivel de la competencia
        if (competenciaActualizada.getNivel() == null || competenciaActualizada.getNivel().isEmpty()) {
            return new ApiResponse(false, "El nivel de la competencia es obligatorio.");
        }

        // Validación del nivel permitido
        if (!(competenciaActualizada.getNivel().equals("básico") || competenciaActualizada.getNivel().equals("intermedio") || competenciaActualizada.getNivel().equals("avanzado"))) {
            return new ApiResponse(false, "El nivel de la competencia debe ser uno de los siguientes: básico, intermedio, avanzado.");
        }

        // Validar que el tipo de la competencia siga siendo "Programa"
        if (competenciaActualizada.getTipo() == null || !competenciaActualizada.getTipo().equalsIgnoreCase("Programa")) {
            return new ApiResponse(false, "El tipo de la competencia debe ser 'Programa'.");
        }

        // Validación de al menos un resultado de aprendizaje asociado
        if (resultadosAprendizaje == null || resultadosAprendizaje.isEmpty()) {
            return new ApiResponse(false, "Debe asociar al menos un resultado de aprendizaje.");
        }

        // Validar los resultados de aprendizaje antes de actualizarlos
        ApiResponse validacionRA = validarResultadosAprendizaje(resultadosAprendizaje);
        if (!validacionRA.isSuccess()) {
            return validacionRA;
        }

        // Actualizar la competencia
        competencia.setDescripcion(competenciaActualizada.getDescripcion());
        competencia.setNivel(competenciaActualizada.getNivel());
        // No es necesario actualizar el tipo, ya que debe permanecer "Programa"

        // Guardar la competencia actualizada
        competencia = competenciaRepository.save(competencia);

        // Actualizar los resultados de aprendizaje asociados
        for (RA ra : resultadosAprendizaje) {
            ra.setCompetencia(competencia);
            raRepository.save(ra);
        }

        return new ApiResponse(true, "Competencia de programa actualizada con éxito.");
    }
    /**
     * Método que valida la lista de resultados de aprendizaje sin registrarlos.
     * Verifica que cada RA tenga una descripción y que esté vinculado a una competencia válida.
     *
     * @param resultadosAprendizaje Lista de resultados de aprendizaje a validar.
     * @return ApiResponse indicando si la validación fue exitosa o no.
     */
    private ApiResponse validarResultadosAprendizaje(List<RA> resultadosAprendizaje) {

        // Verificar que cada resultado de aprendizaje tenga descripción
        for (RA ra : resultadosAprendizaje) {
            if (ra.getDescripcion() == null || ra.getDescripcion().isEmpty()) {
                return new ApiResponse(false, "El resultado de aprendizaje con ID " + ra.getId() + " no tiene descripción.");
            }

        }

        // Si todo está validado correctamente, retornar un éxito
        return new ApiResponse(true, "Los resultados de aprendizaje son válidos.");
    }
}