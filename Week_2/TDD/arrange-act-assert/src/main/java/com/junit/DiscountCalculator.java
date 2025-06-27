package com.junit;

public class DiscountCalculator {

    public double calculateDiscount(double price, double percent) {
        if (price < 0 || percent < 0 || percent > 100) {
            throw new IllegalArgumentException("Invalid input");
        }
        return price * (percent / 100.0);
    }
}

