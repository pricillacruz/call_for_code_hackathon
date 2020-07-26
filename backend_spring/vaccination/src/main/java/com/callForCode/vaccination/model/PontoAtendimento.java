package com.callForCode.vaccination.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name = "ponto_atendimento")
public class PontoAtendimento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_ponto_atendimento")
	private long id_ponto_atendimento;

	@Column(name = "email_ponto_atendimento", nullable = false, unique = true)
	@Size(min = 8, max = 50)
	private String email_ponto_atendimento;

	@Column(name = "telefone_ponto_atendimento", nullable = false, unique = true)
	@Size(min = 8, max = 9)
	private String telefone_ponto_atendimento;

	@Column(name = "senha_ponto_atendimento", nullable = false)
	@Size(min = 6, max = 30)
	private String senha_ponto_atendimento;

	// definir se endereço vai ser outra tabela
	// private String endereço_ponto_atendimento;

	@Column(name = "qt_vacina_recebida", nullable = false)
	private String qt_vacina_recebida;

	@Column(name = "qt_vacina_atual", nullable = false)
	private String qt_vacina_atual;

	@Column(name = "qt_vacina_preferencial", nullable = false)
	private String qt_vacina_preferencial;

	@Column(name = "qt_vacina_comum", nullable = false)
	private String qt_vacina_comum;

}
