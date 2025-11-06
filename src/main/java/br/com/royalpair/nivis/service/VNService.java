package br.com.royalpair.nivis.service;
import br.com.royalpair.nivis.model.VN;
import br.com.royalpair.nivis.repository.VNRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class VNService {

    @Autowired
    private VNRepository vnRepository;

    public VN salvar(VN valorNegativo) {
        return vnRepository.save(valorNegativo);
    }

    public List<VN> buscarTodos(){
        return vnRepository.findAll();
    }

    public VN buscarID(Long id){
        Optional<VN> valorNegativo = vnRepository.findById(id);

        if (valorNegativo.isPresent()){
            return valorNegativo.get();
        }else {
            throw new RuntimeException("VN não encontrado");
        }
    }

    public void excluir(Long id){
        Optional<VN> valorNegativo = vnRepository.findById(id);

        if (valorNegativo.isPresent()){
            vnRepository.deleteById(id);
        }else {
            throw new RuntimeException("VN não encontrado");
        }
    }

    public VN atualizar(Long id, VN valorNegativo){
        Optional<VN> vnAtual = vnRepository.findById(id);
        if (vnAtual.isPresent()){
            return vnRepository.save(valorNegativo);
        }else {
            throw new RuntimeException("VN não encontrado");
        }
    }
}
