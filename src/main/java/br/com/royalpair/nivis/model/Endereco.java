package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "ENDERECO")
public class Endereco {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_ENDERECO")
    @SequenceGenerator(name = "SEQ_ENDERECO", sequenceName = "SEQ_ENDERECO", allocationSize = 1)
    @Column(name = "ID_ENDERECO", length = 6)
    private Long idEndereco;

    @Column(name = "LOGRADOURO", nullable = false, length = 300)
    private String logradouro;

    @Column(name = "NUMERO", nullable = false, length = 20)
    private String numero;

    @Column(name = "BAIRRO", nullable = false, length =100)
    private String bairro;

    @Column(name = "CIDADE", nullable = false, length =100)
    private String cidade;

    @Column(name = "ESTADO", nullable = false, length =100)
    private String estado;

    @Column(name = "CEP", nullable = false, length =50)
    private String cep;

    @Column(name = "PAIS", nullable = false, length =100)
    private String pais;

    @Column(name = "COMPLEMENTO", nullable = true, length =100)
    private String complemento;

    @OneToMany(mappedBy = "endereco")
    private List<Usuario> usuarios;

    public Long getIdEndereco() {
        return idEndereco;
    }

    public void setIdEndereco(Long idEndereco) {
        this.idEndereco = idEndereco;
    }

    public String getLogadouro() {
        return logradouro;
    }

    public void setLogadouro(String logadouro) {
        this.logradouro = logadouro;
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

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
