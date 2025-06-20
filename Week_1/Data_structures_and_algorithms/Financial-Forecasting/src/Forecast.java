public class Forecast {
    public static double calculateFutureValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return growthRate * calculateFutureValue(initialValue, growthRate, years - 1);
    }
}

