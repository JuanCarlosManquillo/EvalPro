package SpringBoot.usuariosSpring.entities;
import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TBL_COMPETENCIA")
public class Competencia {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "competencia_seq")
    @SequenceGenerator(name = "competencia_seq", sequenceName = "tbl_competencia_SEQ", allocationSize = 1)
    @Column(name = "COMP_ID", nullable = false)
    private int id;


    @Column(name = "TBL_COMP_ID")
    private Integer tblCompId;

    @Column(name = "COMP_DESCRIPCION", length = 250)
    private String descripcion;

    @Column(name = "COMP_TIPO", length = 50)
    private String tipo;

    @Column(name = "COMP_NIVEL", length = 50)
    private String nivel;
}
