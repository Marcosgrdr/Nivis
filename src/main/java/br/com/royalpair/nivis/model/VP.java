package br.com.royalpair.nivis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "VP")
@PrimaryKeyJoinColumn(name = "ID_DENDRON")
public class VP extends Dendron{
    @Column(name = "VALOR_TOTAL", nullable = false)
    private double valorTotal;
    private double rendimento;

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

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public double getRendimento() {
        return rendimento;
    }

    public void setRendimento(double rendimento) {
        this.rendimento = rendimento;
    }
}
