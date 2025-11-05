package br.com.royalpair.nivis.controller;
import br.com.royalpair.nivis.model.SomaManual;
import br.com.royalpair.nivis.service.SMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/soma-manual")
public class SMController {

    @Autowired
    private SMService smService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SomaManual salvar(@RequestBody SomaManual somaManual){
        return smService.salvar(somaManual);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SomaManual buscarid(@PathVariable Long id){
        return smService.buscarID(id);
    }

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    public List<SomaManual> buscarTodos(){
        return smService.buscarTodos();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id){
        smService.excluir(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SomaManual atualizar(@PathVariable Long id,@RequestBody SomaManual sm){
        return smService.atualizar(id,sm);
    }
}
