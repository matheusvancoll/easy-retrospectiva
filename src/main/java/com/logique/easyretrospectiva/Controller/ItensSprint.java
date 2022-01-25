package com.logique.easyretrospectiva.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItensSprint {

    @GetMapping(path = "/api/teste")
    public String hello(){
        return "A aplicação está online!";
    }

    @GetMapping(path = "/api/status")
    public String testeConn(){
        String statusConn = "Conexão ativa!";

        return statusConn;
    }
}
