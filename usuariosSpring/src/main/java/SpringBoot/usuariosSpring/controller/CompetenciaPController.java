package SpringBoot.usuariosSpring.controller;

import SpringBoot.usuariosSpring.entities.Competencia;
import SpringBoot.usuariosSpring.entities.RA;
import SpringBoot.usuariosSpring.service.IServiceCompetenciaP;
import SpringBoot.usuariosSpring.utils.ApiResponse;
import SpringBoot.usuariosSpring.utils.CompetenciaProgramaRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/competencia/programa")
public class CompetenciaPController {

    @Autowired
    private IServiceCompetenciaP competenciaService;

    @GetMapping
    public List<Competencia> getAllCompetencias() {
        return competenciaService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Competencia> getCompetenciaById(@PathVariable int id) {
        Optional<Competencia> competencia = competenciaService.findById(id);
        return competencia.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/resultados")
    public ResponseEntity<List<RA>> getRAsByCompetenciaPrograma(@PathVariable int id) {
        try {
            List<RA> resultados = competenciaService.getRAsByCompetenciaProgramaId(id);
            return ResponseEntity.ok(resultados);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    /**
     * Método para crear una competencia de programa con los resultados de aprendizaje asociados.
     */
    @PostMapping
    public ResponseEntity<ApiResponse> createCompetenciaPrograma(
            @RequestBody CompetenciaProgramaRequest competenciaProgramaRequest) {

        // Llamar al servicio para crear la competencia y los RA
        ApiResponse response = competenciaService.save(
                competenciaProgramaRequest.getCompetencia(),
                competenciaProgramaRequest.getResultadosAprendizaje()
        );

        // Retornar la respuesta del servicio
        if (response.isSuccess()) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Método para actualizar una competencia de programa existente.
     */
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateCompetencia(
            @PathVariable int id,
            @RequestBody CompetenciaProgramaRequest competenciaProgramaRequest) {

        // Llamar al servicio para actualizar la competencia y los RA asociados
        ApiResponse response = competenciaService.editCompetenciaPrograma(
                id,
                competenciaProgramaRequest.getCompetencia(),
                competenciaProgramaRequest.getResultadosAprendizaje()
        );

        // Retornar la respuesta del servicio
        if (response.isSuccess()) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }


}