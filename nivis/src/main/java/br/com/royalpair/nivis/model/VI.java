package br.com.royalpair.nivis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "VI")
public class VI extends VP{



    @Override
    public void criarDendron() {
        super.criarDendron();
    }
}
