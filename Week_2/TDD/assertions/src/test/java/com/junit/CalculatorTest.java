package com.junit;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    @Test
    public void checkInstance(){
        Calculator calc = new Calculator();
        assertNotNull(calc, "Calculator instance should not be null");
        assertTrue(calc instanceof Calculator, "calc should be an instance of Calculator");
    }


    @Test
    public void testNull() {
        Calculator calc = null;
        assertNull(calc, "Calculator instance should be null");
    }


    @Test
    public void testTrue() {
        Calculator calc = new Calculator();
        assertTrue(calc.add(2, 3) == 5, "2 + 3 should equal 5");
    }

    @Test
    public void testFalse() {
        Calculator calc = new Calculator();
        assertFalse(calc.add(2, 3) == 6, "2 + 3 should not equal 6");
    }

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(12, calc.add(5, 7));
    }

    @Test
    public void testAddZero() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(5, 0));
    }

    @Test
    public void testSubtract() {
        Calculator calc = new Calculator();
        assertEquals(6, calc.subtract(10, 4));
    }

    @Test
    public void testSubtractNegative() {
        Calculator calc = new Calculator();
        assertEquals(-2, calc.subtract(3, 5));
    }

    @Test
    public void testMultiply() {
        Calculator calc = new Calculator();
        assertEquals(15, calc.multiply(3, 5));
    }

    @Test
    public void testMultiplyByZero() {
        Calculator calc = new Calculator();
        assertEquals(0, calc.multiply(0, 100));
    }

    @Test
    public void testDivide() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.divide(20, 4));
    }

    @Test
    public void testDivideByOne() {
        Calculator calc = new Calculator();
        assertEquals(9, calc.divide(9, 1));
    }

    @Test
    public void testDivideToZero() {
        Calculator calc = new Calculator();
        assertEquals(0, calc.divide(0, 9));
    }

    @Test
    public void testDivideByZero() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));
    }
}
