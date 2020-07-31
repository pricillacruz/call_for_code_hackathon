package com.callForCode.vaccinationAgendamento.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.callForCode.vaccinationAgendamento.model.Agendamento;

@Repository
public interface AgendamentoRepository extends JpaRepository<Agendamento, Long>{
	public List<Agendamento> findAllByNomeunidadeContainingIgnoreCase(String nomeunidade);
}
