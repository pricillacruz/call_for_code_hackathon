package com.callForCode.vaccinationAgendamento.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.callForCode.vaccinationAgendamento.model.Agendamento;
import com.callForCode.vaccinationAgendamento.repository.AgendamentoRepository;

@RestController
@RequestMapping("/agendamento")
@CrossOrigin(origins="*", allowedHeaders="*")
public class AgendamentoController {
	@Autowired
	private AgendamentoRepository repository;
	
	@GetMapping
	public ResponseEntity<List<Agendamento>> GetAll(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping("/{idagendamento}")
	public ResponseEntity<Agendamento> GetById(@PathVariable long idagendamento){
		return repository.findById(idagendamento)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<Agendamento> post(@RequestBody Agendamento agendamento){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(agendamento));
	}
	
	@PutMapping
	public ResponseEntity<Agendamento> put(@RequestBody Agendamento agendamento){
		return ResponseEntity.status(HttpStatus.OK).body(repository.save(agendamento));
	}
	
	@DeleteMapping("/{idagendamento}")
	public void delete(@PathVariable long idagendamento) {
		repository.deleteById(idagendamento);
	}
}
