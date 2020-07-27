package com.callForCode.vaccination.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.callForCode.vaccination.model.PontoAtendimento;

@Repository
public interface PontoAtendimentoRepository extends JpaRepository<PontoAtendimento, Long>{
	public List<PontoAtendimento> findAllByNomeContainingIgnoreCase(String nome);
	public List<PontoAtendimento> findAllByEmailContainingIgnoreCase(String email);
}
