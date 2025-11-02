package br.com.royalpair.nivis.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "SOMA")
public class Soma {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_SOMA")
    @SequenceGenerator(name = "SEQ_SOMA", sequenceName = "SEQ_SOMA", allocationSize = 1)
    private long id;
    @Column(name = "OBSERVACAO", nullable = true)
    private String observacao;
    @Column(name = "DATA_SOMA")
    private LocalDate dataSoma;


    @ManyToOne
    @MapsId
    @JoinColumn(name = "ID_USUARIO")
    private Usuario idUser;

    @ManyToOne
    @JoinColumn(name = "ID_DENDRON")
    private Dendron idDendron;

}
