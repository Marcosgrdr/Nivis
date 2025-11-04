package br.com.royalpair.nivis.model;
import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@DiscriminatorValue("VP")
@Table(name = "SOMA_VP")
@PrimaryKeyJoinColumn(name = "ID_SOMA")
public class SomaVP extends Soma {


    @Column(name = "VALOR_SOMA", precision = 10 ,scale = 2)
    private BigDecimal ValorSoma;

















}
