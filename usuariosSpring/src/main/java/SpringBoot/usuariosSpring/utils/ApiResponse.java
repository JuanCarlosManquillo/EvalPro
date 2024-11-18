package SpringBoot.usuariosSpring.utils;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private String message;
    private T data;
    private int statusCode;

    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}