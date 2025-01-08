package com.example.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.Model.Authentication;

public interface LoginRepository extends  JpaRepository<Authentication, Integer>{

    Optional<Authentication> findByUserName(String userName);
    Optional<Authentication> findByPassword(String password);
}
