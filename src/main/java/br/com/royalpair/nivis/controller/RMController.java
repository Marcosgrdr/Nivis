package br.com.royalpair.nivis.controller;
import br.com.royalpair.nivis.model.ReducaoManual;
import br.com.royalpair.nivis.service.RMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/reducao-manual")
public class RMController {

    @Autowired
    private RMService rmService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ReducaoManual salvar(@RequestBody ReducaoManual reducaoManual){
        return rmService.salvar(reducaoManual);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ReducaoManual buscarPorId(@PathVariable Long id){
        return rmService.buscarID(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ReducaoManual> buscarTodos(){
        return rmService.buscarTodos();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id){
        rmService.excluir(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ReducaoManual atualizar(@PathVariable Long id, @RequestBody ReducaoManual reducaoManual){
        return rmService.atualizar(id,reducaoManual);
    }
}
