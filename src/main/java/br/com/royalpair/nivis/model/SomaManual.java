package br.com.royalpair.nivis.model;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table(name = "SOMA_MANUAL")
@PrimaryKeyJoinColumn(name = "ID_SOMA")
public class SomaManual extends Soma {


    @Column(name = "VALOR_SOMA", precision = 10 ,scale = 2)
    private BigDecimal ValorSoma;


    public BigDecimal getValorSoma() {
        return ValorSoma;
    }

    public void setValorSoma(BigDecimal valorSoma) {
        ValorSoma = valorSoma;
    }
}
