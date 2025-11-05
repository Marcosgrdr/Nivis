package br.com.royalpair.nivis.controller;

import br.com.royalpair.nivis.model.PF;
import br.com.royalpair.nivis.service.PFService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pf")
public class PFController {

    @Autowired
    private PFService pessoaFisicaService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PF salvar(@RequestBody PF pessoaFisica){
        return pessoaFisicaService.salvar(pessoaFisica);

    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PF buscarPorId(@PathVariable Long id){
        return pessoaFisicaService.buscarID(id);

    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<PF> buscarTodos(){
        return pessoaFisicaService.buscarTodos();

    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@RequestBody Long id){
        pessoaFisicaService.excluir(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public PF atualizar(@PathVariable Long id, @RequestBody PF pessoaFisica){
        return pessoaFisicaService.atualizar(id,pessoaFisica);
    }
}
