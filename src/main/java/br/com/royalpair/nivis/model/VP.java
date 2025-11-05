package br.com.royalpair.nivis.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "VP")
@PrimaryKeyJoinColumn(name = "ID_DENDRON")
public class VP extends Dendron{

    @Column(name = "VALOR_TOTAL", nullable = false,precision = 10,scale = 2)
    private BigDecimal valorTotal;

    @Column(name = "RENDIMENTO", nullable = true,precision = 10,scale = 2)
    private BigDecimal rendimento;

    @OneToMany(mappedBy = "idDendron")
    private List<Soma> somas;


    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(BigDecimal valorTotal) {
        this.valorTotal = valorTotal;
    }

    public BigDecimal getRendimento() {
        return rendimento;
    }

    public void setRendimento(BigDecimal rendimento) {
        this.rendimento = rendimento;
    }

    public List<Soma> getSomas() {
        return somas;
    }

    public void setSomas(List<Soma> somas) {
        this.somas = somas;
    }
}
