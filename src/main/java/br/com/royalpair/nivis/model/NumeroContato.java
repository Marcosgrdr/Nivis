package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

@Entity
@Table(name = "NUMERO_CONTATO")
public class NumeroContato {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "SEQ_NUMERO_CONTATO", sequenceName = "SEQ_NUMERO_CONTATO", allocationSize = 1)
    @Column(name = "ID_NUMERO")
    private Long idNumero;
    @Column(name = "CD_PAIS",nullable = false)
    private String pais;
    @Column(name = "CD_REGIAO",nullable = false)
    private String regiao;
    @Column(name = "CD_NUMERO",nullable = false)
    private String numero;

    @OneToOne
    @MapsId
    @JoinColumn(name = "USUARIO_ID_USUARIO")
    private Usuario idUser;

    public Long getIdNumero() {
        return idNumero;
    }

    public void setIdNumero(Long idNumero) {
        this.idNumero = idNumero;
    }

    public Usuario getIdUser() {
        return idUser;
    }

    public void setIdUser(Usuario idUser) {
        this.idUser = idUser;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getRegiao() {
        return regiao;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
}
