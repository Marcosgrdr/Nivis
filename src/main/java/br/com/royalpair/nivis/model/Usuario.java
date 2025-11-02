package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "USUARIO")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_USUARIO")
    @SequenceGenerator(name = "SEQ_USUARIO", sequenceName = "SEQ_USUARIO", allocationSize = 1)
    private Long id;

    @Column(nullable = false, length = 100)
    private String email;
    @Column(nullable = false, length = 20)
    private String senha;
    @Column(nullable = true, length = 200)
    private String caminhoImgPerfil;
    @Column(name = "DATA_CADASTRO")
    private LocalDate dataCadastro;

    //Relações (só pra me organizar)
    @ManyToOne
    @JoinColumn(name = "ENDERECO_ID_ENDERECO")
    private Endereco endereco;

    @OneToOne(mappedBy = "idUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private NumeroContato numeroContato;

    @OneToMany(mappedBy = "idUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private Soma soma;

    @OneToMany(mappedBy = "idUser", cascade = CascadeType.ALL, orphanRemoval = true)

    public abstract void criarUsuario();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCaminhoImgPerfil() {
        return caminhoImgPerfil;
    }

    public void setCaminhoImgPerfil(String caminhoImgPerfil) {
        this.caminhoImgPerfil = caminhoImgPerfil;
    }

    public LocalDate getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDate dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public NumeroContato getNumeroContato() {
        return numeroContato;
    }

    public void setNumeroContato(NumeroContato numeroContato) {
        this.numeroContato = numeroContato;
    }
}
