package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.Model.Authentication;

public interface RegisterRepository extends JpaRepository<Authentication, Integer> {
    Authentication findByUserName(String userName);
}
