package SpringBoot.usuariosSpring.service;

import SpringBoot.usuariosSpring.entities.RA;
import SpringBoot.usuariosSpring.utils.ApiResponse;

import java.util.List;
import java.util.Optional;

public interface IServiceRAP {
    List<RA> findAll();
    Optional<RA> findById(int id);
    ApiResponse save(RA ra);
    ApiResponse update(int id, RA ra);
}