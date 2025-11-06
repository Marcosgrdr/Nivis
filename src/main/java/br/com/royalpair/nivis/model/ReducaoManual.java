package br.com.royalpair.nivis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

import java.math.BigDecimal;

@Entity
@Table(name = "REDUCAO_MANUAL")
@PrimaryKeyJoinColumn(name = "ID_REDUCAO")
public class ReducaoManual extends Reducao{

    @Column(name = "VALOR_REDUCAO", precision = 10, scale = 2)
    private BigDecimal valorReducao;

    public BigDecimal getValorReducao() {
        return valorReducao;
    }

    public void setValorReducao(BigDecimal valorReducao) {
        this.valorReducao = valorReducao;
    }
}
