package br.com.royalpair.nivis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

import java.util.Scanner;

@Entity
@Table(name = "PJ")
@PrimaryKeyJoinColumn(name = "USUARIO_ID_USUARIO")
public class PJ extends Usuario{
    // input = new Scanner(System.in);
    @Column(nullable = false, length = 100)
    private String razaoSocial;
    @Column(nullable = false)
    private String dataAbertura;



    @Override
    public void criarUsuario() {
//        System.out.println("Defina sua data de nascimeto: ");
//        String dd= input.nextLine();
//        String mm= input.nextLine();
//        String yy= input.nextLine();
//        dataAbertura = dd+"/"+mm+"/"+yy;

    }


    public String getRazaoSocial() {
        return razaoSocial;
    }

    public void setRazaoSocial(String razaoSocial) {
        this.razaoSocial = razaoSocial;
    }

    public String getDataAbertura() {
        return dataAbertura;
    }

    public void setDataAbertura(String dataAbertura) {
        this.dataAbertura = dataAbertura;
    }


}
