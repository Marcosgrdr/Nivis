package br.com.royalpair.nivis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "VI")
@PrimaryKeyJoinColumn(name = "ID_DENDRON")
public class VI extends VP{



    @Override
    public void criarDendron() {
        super.criarDendron();
    }
}
