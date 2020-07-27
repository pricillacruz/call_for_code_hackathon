package com.callForCode.vaccination.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.br.CPF;

@Entity
@Table(name = "usuarios")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	private long id_usuario;

	@Column(name = "nome_usuario", nullable = false)
	@Size(min = 5, max = 100)
	private String nome_usuario;

	@Column(name = "data_nascimento_usuario", nullable = false)
	@Size(min = 7, max = 7)
	private String data_nascimento_usuario;

	@Column(name = "rg_usuario", nullable = false, unique = true)
	private String rg_usuario;

	@Column(name = "cpf_usuario", nullable = false, unique = true)
	@Size(min = 11, max = 11)
	@CPF
	private String cpf_usuario;

	@Column(name = "email_usuario", nullable = false, unique = true)
	@Size(min = 8, max = 50)
	private String email_usuario;

	@Column(name = "telefone_usuario", nullable = false, unique = true)
	@Size(min = 8, max = 9)
	private String telefone_usuario;

	@Column(name = "tipo_usuario", nullable = false)
	private String tipo_usuario;

	@Column(name = "senha_usuario", nullable = false)
	@Size(min = 6, max = 30)
	private String senha_usuario;

	// definir se endereço vai ser outra tabela
	// private String endereço_usuario;

}
