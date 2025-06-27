package com.junit;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.*;

public class DiscountCalculatorTest {

    private DiscountCalculator calculator;

    @BeforeEach
    void setUp() {
        calculator = new DiscountCalculator();
        assertNotNull(calculator);
        System.out.println("Test Starting...");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Test Finished.\n");
    }

    @Test
    void testValidDiscount() {
        // arrange
        double price = 1000.0;
        double percent = 10.0;

        // act
        double discount = calculator.calculateDiscount(price, percent);

        // assert
        assertEquals(100.0, discount);
    }

    @Test
    void testZeroDiscount() {
        double price = 500.0;
        double percent = 0.0;
        double discount = calculator.calculateDiscount(price, percent);
        assertEquals(0.0, discount);
    }

    @Test
    void testFullDiscount() {
        double price = 250.0;
        double percent = 100.0;
        double discount = calculator.calculateDiscount(price, percent);
        assertEquals(250.0, discount);
    }

    @Test
    void testNegativePriceThrowsException() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculateDiscount(-100, 10);
        });
    }

    @Test
    void testInvalidPercentageThrowsException() {
        assertThrows(IllegalArgumentException.class, () -> {
            calculator.calculateDiscount(200, 150);
        });
    }
}

