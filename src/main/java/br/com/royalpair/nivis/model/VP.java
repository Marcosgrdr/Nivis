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

    @Override
    public void criarDendron() {

    }

    //-------------------------------------------------------------------------------
    public void soma(){

    }
    public void somaManual(Long idDendron, Long idSoma){

    }
    public void somaManual(String nome,Long idDendron, Long idSoma){

    }
    //-------------------------------------------------------------------------------



}
