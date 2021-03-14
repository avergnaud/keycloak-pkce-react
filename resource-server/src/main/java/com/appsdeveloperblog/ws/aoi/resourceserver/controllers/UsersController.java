package com.appsdeveloperblog.ws.aoi.resourceserver.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    Environment env;

    @GetMapping("/status/check")
    public Map status() {

        return Collections.singletonMap("response", "protected value");
    }
}
