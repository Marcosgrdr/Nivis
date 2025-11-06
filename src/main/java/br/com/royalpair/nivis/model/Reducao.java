package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "REDUCAO")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Reducao {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "SEQ_REDUCAO")
    @SequenceGenerator(name = "SEQ_REDUCAO", sequenceName = "SEQ_REDUCAO", allocationSize = 1)
    @Column(name = "ID_REDUCAO")
    private Long id;

    @Column(name = "Observacao", length =50)
    private String observacao;

    @Column(name = "DATA_REDUCAO")
    private LocalDate dataReducao;


    @ManyToOne
    @JoinColumn(name = "ID_DENDRON")
    private Dendron idDendron;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public LocalDate getDataReducao() {
        return dataReducao;
    }

    public void setDataReducao(LocalDate dataReducao) {
        this.dataReducao = dataReducao;
    }

    public Dendron getIdDendron() {
        return idDendron;
    }

    public void setIdDendron(Dendron idDendron) {
        this.idDendron = idDendron;
    }
}
