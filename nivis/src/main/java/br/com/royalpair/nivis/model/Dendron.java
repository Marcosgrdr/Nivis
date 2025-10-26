package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "DENDRON")
public abstract class Dendron {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_DENDRON")
    @SequenceGenerator(name = "SEQ_DENDRON", sequenceName = "SEQ_DENDRON", allocationSize = 1)
    private int id;
    @Column(name = "ID_USUARIO", nullable = false)
    private int idUser;
    @Column(length = 30, nullable = false)
    private String nome;
    @Column(length = 70,nullable = true)
    private String descricao;
    @Column(name = "DATA_CRIACAO")
    private LocalDate dataCriacao;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
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
    public abstract void criarDendron();
}
