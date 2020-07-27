package com.callForCode.vaccination.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.callForCode.vaccination.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	public List<Usuario> findAllByNomeContainingIgnoreCase(String nome);
	public List<Usuario> findAllByEmailContainingIgnoreCase(String email);
	public List<Usuario> findAllByCpfContainingIgnoreCase(String cpf);
	public List<Usuario> findAllByRgContainingIgnoreCase(String rg);
	public Optional<Usuario> findByEmail(String email);
}
