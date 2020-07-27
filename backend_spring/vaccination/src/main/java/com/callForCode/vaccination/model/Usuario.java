package com.callForCode.vaccination.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.br.CPF;

@Entity
@Table(name = "usuario")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	private long id;

	@Column(name = "nome_usuario", nullable = false)
	@Size(min = 5, max = 100)
	private String nome;

	@Column(name = "data_nascimento_usuario", nullable = false)
	@Size(min = 8, max = 8)
	private Date dataNascimento;

	@Column(name = "rg_usuario", nullable = false, unique = true)
	@Size(min = 9, max = 9)
	private String rg;

	@Column(name = "cpf_usuario", unique = true)
	@Size(min = 11, max = 11)
	@CPF
	private String cpf;

	@Column(name = "email_usuario", nullable = false, unique = true)
	@Size(min = 8, max = 50)
	@Email
	private String email;

	@Column(name = "telefone_usuario", nullable = false)
	@Size(min = 10, max = 11)
	private String telefone;

	@Column(name = "tipo_usuario", nullable = false)
	private String tipo;

	@Column(name = "senha_usuario", nullable = false)
	@Size(min = 6, max = 30)
	
	// definir se endereço vai ser outra tabela
	// private String endereço_usuario;
	
	
	
	private String senha;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
		
}
