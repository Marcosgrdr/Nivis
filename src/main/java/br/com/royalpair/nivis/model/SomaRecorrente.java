//package br.com.royalpair.nivis.model;
//
//import jakarta.persistence.*;
//
//import java.math.BigDecimal;
//import java.time.LocalDate;
//
//@Entity
//@Table(name = "SOMA_RECORRENTE")
//public abstract class SomaRecorrente{
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_SOMA_RECORRENTE")
//    @SequenceGenerator(name = "SEQ_SOMA_RECORRENTE", sequenceName = "SEQ_SOMA_RECORRENTE", allocationSize = 1)
//    @Column(name = "ID_SOMA_RECORRENTE", length = 6)
//    private Long id;
//
//    @Column(name = "OBSERVACAO", nullable = true, length = 100)
//    private String observacao;
//
//    @Column(name = "VALOR_SOMA", precision = 10 ,scale = 2)
//    private BigDecimal ValorSoma;
//
//    @Column(name = "INTERVALO", nullable = false)
//    private String intervalo;
//
//    @Column(name = "DATA_INICIO", nullable = false)
//    private LocalDate dataInicio;
//
//    @Column(name = "DATA_FIM", nullable = true)
//    private LocalDate dataFim;
//
//}
