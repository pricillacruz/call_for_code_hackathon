package com.callForCode.vaccination.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "agendamento")
public class Agendamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_agendamento")
	private long id;

	// colocar anotação para data
	@Column(name = "data_atendimento")
	@Size(min = 8, max = 8)
	private Date data;

	// colocar anotação para horario
	private Date horario;

	// colocar anotação para chave estrangeira
	private long idUsuario;

	// colocar anotação para chave estrangeira
	private long idPontoAtendimento;

}
