package br.com.royalpair.nivis.service;
import br.com.royalpair.nivis.model.VP;
import br.com.royalpair.nivis.repository.VPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VPService {

    @Autowired
    private VPRepository vpRepository;

    public VP salvar(VP valorPositivo) {
        return vpRepository.save(valorPositivo);
    }

    public List<VP> buscarTodos(){
        return vpRepository.findAll();
    }

    public VP buscarID(Long id){
        Optional<VP> valorPositivo = vpRepository.findById(id);

        if (valorPositivo.isEmpty()){
            return valorPositivo.get();
        }else {
            throw new RuntimeException("VP não encontrado");
        }
    }

    public void excluir(Long id){
        Optional<VP> valorPositivo = vpRepository.findById(id);

        if (valorPositivo.isEmpty()){
            vpRepository.deleteById(id);
        }else {
            throw new RuntimeException("vp não encontrado");
        }
    }

    public VP atualizar(Long id, VP valorPositivo){
        Optional<VP> VPAtual = vpRepository.findById(id);
        if (VPAtual.isEmpty()){
            return vpRepository.save(valorPositivo);
        }else {
            throw new RuntimeException("VP não encontrado");
        }
    }
}
