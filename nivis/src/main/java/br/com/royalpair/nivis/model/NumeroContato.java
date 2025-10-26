package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

@Entity
@Table(name = "NUMERO_CONTATO")
public class NumeroContato {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "SEQ_NUMERO_CONTATO", sequenceName = "SEQ_NUMERO_CONTATO", allocationSize = 1)
    @Column(name = "ID_NUMERO")
    private int idNumero;
    @Column(name = "ID_USUARIO", nullable = false)
    private int idUser;
    @Column(name = "CD_PAIS",nullable = false)
    private String pais;
    @Column(name = "CD_REGIAO",nullable = false)
    private String regiao;
    @Column(name = "CD_NUMERO",nullable = false)
    private String numero;


    public int getIdNumero() {
        return idNumero;
    }

    public void setIdNumero(int idNumero) {
        this.idNumero = idNumero;
    }

    public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
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
