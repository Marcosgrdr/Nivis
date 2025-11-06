package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "DENDRON")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Dendron {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_DENDRON")
    @SequenceGenerator(name = "SEQ_DENDRON", sequenceName = "SEQ_DENDRON", allocationSize = 1)
    @Column(name = "ID_DENDRON")
    private Long id;

    @Column(name = "NOME", length = 100, nullable = false)
    private String nome;

    @Column(name = "DESCRICAO", length = 100,nullable = true)
    private String descricao;

    @Column(name = "DATA_CRIACAO",nullable = false)
    private LocalDate dataCriacao;


    @ManyToOne
    @JoinColumn(name = "ID_USUARIO")
    private Usuario idUser;

    @OneToMany(mappedBy = "idDendron")
    private List<Reducao> reducoes;

    @OneToMany(mappedBy = "idDendron")
    private List<Soma> somas;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public LocalDate getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDate dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public Usuario getIdUser() {
        return idUser;
    }

    public void setIdUser(Usuario idUser) {
        this.idUser = idUser;
    }

    public List<Reducao> getReducoes() {
        return reducoes;
    }

    public void setReducoes(List<Reducao> reducoes) {
        this.reducoes = reducoes;
    }

    public List<Soma> getSomas() {
        return somas;
    }

    public void setSomas(List<Soma> somas) {
        this.somas = somas;
    }
}
