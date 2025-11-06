package br.com.royalpair.nivis.repository;

import br.com.royalpair.nivis.model.ReducaoManual;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RMRepository extends JpaRepository<ReducaoManual, Long> {
}
