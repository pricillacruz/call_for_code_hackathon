package com.callForCode.vaccination.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "agendamento")
public class Agendamento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_agendamentoo")
	private long id_agendamento;

	// colocar anotação para data
	private String data;

	// colocar anotação para horario
	private String horario;

	// colocar anotação para chave estrangeira
	private long id_usuario;

	// colocar anotação para chave estrangeira
	private long id_ponto_atendimento;

}
