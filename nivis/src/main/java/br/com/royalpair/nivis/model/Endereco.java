package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ENDERECO")
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ENDERECO")
    @SequenceGenerator(name = "SEQ_ENDERECO", sequenceName = "SEQ_ENDERECO", allocationSize = 1)
    @Column(name = "ID_ENDERECO")
    private int idEndereco;
    @Column(name = "ID_USUARIO", nullable = false)
    private int idUsusario;
    @Column(nullable = false, length = 300)
    private String logadouro;
    @Column(nullable = false, length = 20)
    private String numero;
    @Column(nullable = false, length =100)
    private String bairro;
    @Column(nullable = false, length =100)
    private String cidade;
    @Column(nullable = false, length =100)
    private String estado;
    @Column(nullable = false, length =50)
    private String cep;
    @Column(nullable = false, length =100)
    private String pais;
    @Column(nullable = true, length =100)
    private String complemento;


    public int getIdUsusario() {
        return idUsusario;
    }

    public void setIdUsusario(int idUsusario) {
        this.idUsusario = idUsusario;
    }

    public int getIdEndereco() {
        return idEndereco;
    }

    public void setIdEndereco(int idEndereco) {
        this.idEndereco = idEndereco;
    }

    public String getLogadouro() {
        return logadouro;
    }

    public void setLogadouro(String logadouro) {
        this.logadouro = logadouro;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }
}
