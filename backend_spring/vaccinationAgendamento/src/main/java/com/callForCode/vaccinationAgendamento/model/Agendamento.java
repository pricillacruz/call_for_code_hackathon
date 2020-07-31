package com.callForCode.vaccinationAgendamento.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="agendamentos")
public class Agendamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long idagendamento;
	
	@NotNull
	@Size(min=2, max=50)
	private String nomeunidade;
	
	@Temporal(TemporalType.DATE)
	private Date dataagendamento;
	
	@Temporal(TemporalType.TIME)
	private Date horario;

	public long getIdagendamento() {
		return idagendamento;
	}

	public void setIdagendamento(long idagendamento) {
		this.idagendamento = idagendamento;
	}

	public String getNomeunidade() {
		return nomeunidade;
	}

	public void setNomeunidade(String nomeunidade) {
		this.nomeunidade = nomeunidade;
	}

	public Date getDataagendamento() {
		return dataagendamento;
	}

	public void setDataagendamento(Date dataagendamento) {
		this.dataagendamento = dataagendamento;
	}

	public Date getHorario() {
		return horario;
	}

	public void setHorario(Date horario) {
		this.horario = horario;
	}
	
	
	
	
}
