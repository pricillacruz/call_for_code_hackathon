package com.callForCode.vaccination.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity
@Table(name = "ponto_atendimento")
public class PontoAtendimento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_ponto_atendimento")
	private long id;
	
	@Column(name = "nome_ponto_atendimento", nullable = true)
	@Size(min = 3, max = 100)
	private String nome;

	@Column(name = "email_ponto_atendimento", nullable = true, unique = true)
	@Size(min = 8, max = 50)
	@Email
	private String email;

	@Column(name = "telefone_ponto_atendimento", nullable = true, unique = true)
	@Size(min = 8, max = 9)
	private String telefone;

	@Column(name = "senha_ponto_atendimento", nullable = true)
	@Size(min = 6, max = 30)
	private String senha;

	// definir se endereço vai ser outra tabela
	// private String endereço_ponto_atendimento;
	
	@Column(name = "qt_vacina_recebida", nullable = true)
	private int qtVacinaRecebida;

	@Column(name = "qt_vacina_atual", nullable = true)
	private int qtVacinaAtual;

	@Column(name = "qt_vacina_preferencial", nullable = true)
	private int qtVacinaPreferencial;

	@Column(name = "qt_vacina_comum", nullable = true)
	private int qtVacinaComum;

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

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public int getQtVacinaRecebida() {
		return qtVacinaRecebida;
	}

	public void setQtVacinaRecebida(int qtVacinaRecebida) {
		this.qtVacinaRecebida = qtVacinaRecebida;
	}

	public int getQtVacinaAtual() {
		return qtVacinaAtual;
	}

	public void setQtVacinaAtual(int qtVacinaAtual) {
		this.qtVacinaAtual = qtVacinaAtual;
	}

	public int getQtVacinaPreferencial() {
		return qtVacinaPreferencial;
	}

	public void setQtVacinaPreferencial(int qtVacinaPreferencial) {
		this.qtVacinaPreferencial = qtVacinaPreferencial;
	}

	public int getQtVacinaComum() {
		return qtVacinaComum;
	}

	public void setQtVacinaComum(int qtVacinaComum) {
		this.qtVacinaComum = qtVacinaComum;
	}

	

}
