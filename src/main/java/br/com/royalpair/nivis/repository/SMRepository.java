package br.com.royalpair.nivis.repository;
import br.com.royalpair.nivis.model.SomaManual;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SMRepository extends JpaRepository<SomaManual,Long> {
}
