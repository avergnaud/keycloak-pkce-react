package com.poc.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/contacts")
public class ContactsController {

    @Autowired
    Environment env;

    @GetMapping("/")
    public Map status() {

        return Collections.singletonMap("response", "protected contacts resource !");
    }
}
