package br.com.royalpair.nivis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "VN")
@PrimaryKeyJoinColumn(name = "ID_DENDRON")
public class VN extends Dendron{






}
