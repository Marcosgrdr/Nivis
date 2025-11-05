package br.com.royalpair.nivis.service;

import br.com.royalpair.nivis.model.SomaManual;
import br.com.royalpair.nivis.repository.SMRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SMService {

    @Autowired
    private SMRepository smRepository;

    public SomaManual salvar(SomaManual somaManual){
        return smRepository.save(somaManual);
    }

    public List<SomaManual> buscarTodos(){
        return smRepository.findAll();
    }

    public SomaManual buscarID(Long id){
        Optional<SomaManual> sm = smRepository.findById(id);

        if (sm.isEmpty()){
            return sm.get();
        }else {
            throw new RuntimeException("Movimentação SM não localizada");
        }
    }

    public void excluir(Long id){
        Optional<SomaManual> sm = smRepository.findById(id);

        if (sm.isEmpty()){
            smRepository.deleteById(id);
        }else {
            throw new RuntimeException("Movimentação SM não localizada");
        }
    }

    public SomaManual atualizar (Long id, SomaManual sm){
        Optional<SomaManual> soma = smRepository.findById(id);

        if (soma.isEmpty()){
            return smRepository.save(sm);
        }else {
            throw new RuntimeException("Movimentação SM não localizada");
        }
    }
}
