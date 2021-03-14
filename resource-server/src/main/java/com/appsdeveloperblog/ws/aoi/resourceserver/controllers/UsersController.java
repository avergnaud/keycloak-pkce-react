package com.appsdeveloperblog.ws.aoi.resourceserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/protected-resources")
public class UsersController {

    @Autowired
    Environment env;

    @GetMapping("/")
    public Map status() {

        return Collections.singletonMap("response", "protected resources !");
    }
}
