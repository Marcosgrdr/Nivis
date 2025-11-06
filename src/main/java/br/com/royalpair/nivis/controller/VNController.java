package br.com.royalpair.nivis.controller;
import br.com.royalpair.nivis.model.VN;
import br.com.royalpair.nivis.service.VNService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/vn")
public class VNController {

    @Autowired
    private VNService vnService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public VN salvar(@RequestBody VN valorNegativo){
        return vnService.salvar(valorNegativo);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VN buscarPorID(@PathVariable Long id){
        return vnService.buscarID(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<VN> buscarTodos(){
        return vnService.buscarTodos();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluir(@PathVariable Long id){
        vnService.excluir(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public VN atualizar(@PathVariable Long id,@RequestBody VN valorNegativo){
        return vnService.atualizar(id,valorNegativo);
    }
}
