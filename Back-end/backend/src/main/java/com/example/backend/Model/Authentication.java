package com.example.backend.Model;

import jakarta.persistence.*;

@Entity
public class Authentication {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdUser;
    private String userName;
    private String password;
    private String token;

    public int getIdUser() {
        return IdUser;
    }

    public void setIdUser(int idUser) {
        IdUser = idUser;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
