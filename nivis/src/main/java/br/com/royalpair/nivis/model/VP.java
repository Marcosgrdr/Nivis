package br.com.royalpair.nivis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "VP")
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
    public void somaManual(int idDendron, int idSoma){

    }
    public void somaManual(String nome,int idDendron, int idSoma){

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
