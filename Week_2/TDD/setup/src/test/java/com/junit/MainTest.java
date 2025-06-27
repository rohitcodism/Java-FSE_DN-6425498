package com.junit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class MainTest {
    @Test
    public void testGreet() {
        Greeter greeter = new Greeter();
        String result = greeter.greet("World");
        assertEquals("Hello, World!", result);
    }

    @Test
    public void testAdd() {
        Greeter greeter = new Greeter();
        int result = greeter.add(2, 3);
        assertEquals(5, result);
    }
}
