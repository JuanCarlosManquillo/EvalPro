package SpringBoot.usuariosSpring.entities;
import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TBL_RA")
public class RA {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tbl_ra_SEQ")
    @SequenceGenerator(name = "tbl_ra_SEQ", sequenceName = "tbl_ra_SEQ", initialValue = 1, allocationSize = 1)
    @Column(name = "RAP_ID", nullable = false)
    private int id;

    @Column(name = "RAP_DESCRIPCION", length = 250)
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "COMP_ID", nullable = false)
    private Competencia competencia;
}
