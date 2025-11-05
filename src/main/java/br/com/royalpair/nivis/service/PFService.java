package br.com.royalpair.nivis.service;
import br.com.royalpair.nivis.model.PF;
import br.com.royalpair.nivis.repository.PFRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PFService {
    @Autowired
    private PFRepository pfRepository;

    public PF salvar(PF pessoafisica) {
        return pfRepository.save(pessoafisica);
    }

    public List<PF> buscarTodos(){
        return pfRepository.findAll();
    }

    public PF buscarID(Long id){
        Optional<PF> pessoaFisica = pfRepository.findById(id);

        if (pessoaFisica.isEmpty()){
            return pessoaFisica.get();
        }else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    public void excluir(Long id){
        Optional<PF> pessoaFisica = pfRepository.findById(id);

        if (pessoaFisica.isEmpty()){
            pfRepository.deleteById(id);
        }else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

    public PF atualizar(Long id, PF pessoaFisica){
        Optional<PF> pfAtual = pfRepository.findById(id);
        if (pfAtual.isEmpty()){
            return pfRepository.save(pessoaFisica);
        }else {
            throw new RuntimeException("Usuário não encontrado");
        }
    }

}
