package br.com.royalpair.nivis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "VR")
public class VR extends VP{



    @Override
    public void criarDendron() {
        super.criarDendron();
    }
}
