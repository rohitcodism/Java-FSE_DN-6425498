package com.cognizant.jpacomparison.config;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.persistence.EntityManagerFactory;

/**
 * Hibernate Configuration
 * This configuration is needed for the HibernateEmployeeDao to work
 * It creates a SessionFactory bean from the existing EntityManagerFactory
 * 
 * Note: Currently disabled due to Spring Boot configuration conflicts
 */
// @Configuration - Temporarily disabled
public class HibernateConfig {
    
    @Bean("hibernateSessionFactory")
    public SessionFactory sessionFactory(EntityManagerFactory entityManagerFactory) {
        if (entityManagerFactory.unwrap(SessionFactory.class) == null) {
            throw new NullPointerException("Factory is not a Hibernate factory");
        }
        return entityManagerFactory.unwrap(SessionFactory.class);
    }
}
