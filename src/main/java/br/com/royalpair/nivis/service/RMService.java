package br.com.royalpair.nivis.service;
import br.com.royalpair.nivis.model.ReducaoManual;
import br.com.royalpair.nivis.repository.RMRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RMService {

    @Autowired
    private RMRepository rmRepository;

    public ReducaoManual salvar(ReducaoManual rm) {
        return rmRepository.save(rm);
    }

    public List<ReducaoManual> buscarTodos(){
        return rmRepository.findAll();
    }

    public ReducaoManual buscarID(Long id){
        Optional<ReducaoManual> reducaoManual = rmRepository.findById(id);

        if (reducaoManual.isPresent()){
            return reducaoManual.get();
        }else {
            throw new RuntimeException("Redução não encontrada");
        }
    }

    public void excluir(Long id){
        Optional<ReducaoManual> reducaoManual = rmRepository.findById(id);

        if (reducaoManual.isPresent()){
            rmRepository.deleteById(id);
        }else {
            throw new RuntimeException("Redução não encontrada");
        }
    }

    public ReducaoManual atualizar(Long id, ReducaoManual rm){
        Optional<ReducaoManual> reducaoManual = rmRepository.findById(id);
        if (reducaoManual.isPresent()){
            return rmRepository.save(rm);
        }else {
            throw new RuntimeException("Redução não encontrada");
        }
    }
}
