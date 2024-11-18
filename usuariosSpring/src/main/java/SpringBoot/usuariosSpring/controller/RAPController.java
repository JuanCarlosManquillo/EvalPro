package SpringBoot.usuariosSpring.controller;

import SpringBoot.usuariosSpring.entities.RA;
import SpringBoot.usuariosSpring.service.IServiceRAP;
import SpringBoot.usuariosSpring.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ra/programa")
public class RAPController {

    @Autowired
    private IServiceRAP raService;

    @GetMapping
    public List<RA> getAllRA() {
        return raService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RA> getRAById(@PathVariable int id) {
        Optional<RA> ra = raService.findById(id);
        return ra.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ApiResponse> createRA(@RequestBody RA ra) {
        ApiResponse response = raService.save(ra);
        // Retornar la respuesta del servicio
        if (response.isSuccess()) {
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    // Endpoint para actualizar un RA de programa
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateRA(@PathVariable int id, @RequestBody RA ra) {
        ApiResponse response = raService.update(id, ra);
        if (response.isSuccess()) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }


}
