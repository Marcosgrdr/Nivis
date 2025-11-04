package br.com.royalpair.nivis.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

import java.time.LocalDate;
import java.util.Scanner;

@Entity
@Table(name = "PF")
@PrimaryKeyJoinColumn(name = "USUARIO_ID_USUARIO")
public class PF extends Usuario{
   // Scanner input = new Scanner(System.in);

    @Column(nullable = false, length = 100)
    private String nome;
    @Column(nullable = false)
    private String dataNascimento;


    @Override
    public void criarUsuario() {
        System.out.println("Defina sua data de nascimeto: ");
//        String dd= input.nextLine();
//        String mm= input.nextLine();
//        String yy= input.nextLine();
//        dataNascimento = dd+"/"+mm+"/"+yy;

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }


}
