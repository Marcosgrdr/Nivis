package br.com.royalpair.nivis.model;
import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "SOMA")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Soma {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_SOMA")
    @SequenceGenerator(name = "SEQ_SOMA", sequenceName = "SEQ_SOMA", allocationSize = 1)
    @Column(name = "ID_SOMA", length = 6)
    private Long id;

    @Column(name = "TITULO", nullable = false, length = 30)
    private String titulo;

    @Column(name = "DATA_SOMA",nullable = false)
    private LocalDate dataSoma;


    @ManyToOne
    @JoinColumn(name = "ID_DENDRON")
    private Dendron idDendron;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public LocalDate getDataSoma() {
        return dataSoma;
    }

    public void setDataSoma(LocalDate dataSoma) {
        this.dataSoma = dataSoma;
    }

    public Dendron getIdDendron() {
        return idDendron;
    }

    public void setIdDendron(Dendron idDendron) {
        this.idDendron = idDendron;
    }
}
