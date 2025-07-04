package com.cognizant.jpacomparison.config;

import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import jakarta.persistence.EntityManagerFactory;


public class HibernateConfig {
    
    @Bean("hibernateSessionFactory")
    public SessionFactory sessionFactory(EntityManagerFactory entityManagerFactory) {
        if (entityManagerFactory.unwrap(SessionFactory.class) == null) {
            throw new NullPointerException("Factory is not a Hibernate factory");
        }
        return entityManagerFactory.unwrap(SessionFactory.class);
    }
}
