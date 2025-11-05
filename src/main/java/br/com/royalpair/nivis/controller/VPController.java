package br.com.royalpair.nivis.controller;

import br.com.royalpair.nivis.model.VP;
import br.com.royalpair.nivis.service.VPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vp")
public class VPController {

    @Autowired
    private VPService vpService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VP salvar(@RequestBody VP valorPositivo){
        return vpService.salvar(valorPositivo);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VP buscarPorID(@PathVariable Long id){
        return vpService.buscarID(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<VP> buscarTodos(){
        return vpService.buscarTodos();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id){
        vpService.excluir(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VP atualizar(@PathVariable Long id,@RequestBody VP valorPositivo){
        return vpService.atualizar(id,valorPositivo);
    }

}
