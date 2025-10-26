package br.com.royalpair.nivis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "VN")
public class VN extends Dendron{



    @Override
    public void criarDendron() {

    }
}
