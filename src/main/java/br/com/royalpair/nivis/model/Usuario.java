package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "USUARIO")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_USUARIO")
    @SequenceGenerator(name = "SEQ_USUARIO", sequenceName = "SEQ_USUARIO", allocationSize = 1)
    @Column(name = "ID_USUARIO")
    private Long id;

    @Column(name = "EMAIL", nullable = false, length = 100)
    private String email;

    @Column(name = "SENHA", nullable = false, length = 25)
    private String senha;

    @Column(name = "IMG", nullable = true, length = 200)
    private String caminhoImgPerfil;

    @Column(name = "DATA_CADASTRO", nullable = false)
    private LocalDate dataCadastro;


//    @ManyToOne
//    @JoinColumn(name = "ID_ENDERECO")
//    private Endereco endereco;
//
//    @OneToMany(mappedBy = "idUser", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<NumeroContato> numeroContato;

    @OneToMany(mappedBy = "idUser", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Dendron> dendron;


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

//    public Endereco getEndereco() {
//        return endereco;
//    }
//
//    public void setEndereco(Endereco endereco) {
//        this.endereco = endereco;
//    }
//
//    public List<NumeroContato> getNumeroContato() {
//        return numeroContato;
//    }
//
//    public void setNumeroContato(List<NumeroContato> numeroContato) {
//        this.numeroContato = numeroContato;
//    }

    public List<Dendron> getDendron() {
        return dendron;
    }

    public void setDendron(List<Dendron> dendron) {
        this.dendron = dendron;
    }
}
