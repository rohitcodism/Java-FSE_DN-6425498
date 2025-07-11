package com.cognizant.country_code.controller;

import com.cognizant.country_code.model.Country;
import com.cognizant.country_code.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class CountryCodeController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CountryCodeController.class);

    @Autowired
    private CountryService countryService;

    @GetMapping("/country/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        LOGGER.info("START - getCountryByCode: {}", code);
        Country country = countryService.getCountry(code);
        LOGGER.info("END - getCountryByCode");
        return country;
    }
}
