// package com.example.tinhluong.Service;

// import org.springframework.stereotype.Service;

// @Service
// public class TinhluongService {

// }
package com.example.tinhluong.Service;

import com.example.tinhluong.Model.Tinhluong;
import com.example.tinhluong.Repository.TinhluongRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TinhluongService {

    @Autowired
    private TinhluongRepository repository;

    public List<Tinhluong> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Tinhluong> getEmployeeById(int id) {
        return repository.findById(id);
    }

    public Tinhluong saveEmployee(Tinhluong employee) {
        return repository.save(employee);
    }

    public void deleteEmployee(int id) {
        repository.deleteById(id);
    }
}
