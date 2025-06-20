import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter initial investment amount: ");
        double initialValue = scanner.nextDouble();

        System.out.print("Enter annual growth rate (1.10 for 10%): ");
        double growthRate = scanner.nextDouble();

        System.out.print("Enter number of years to forecast: ");
        int years = scanner.nextInt();

        double result = Forecast.calculateFutureValue(initialValue, growthRate, years);
        System.out.printf("Forecasted value after %d years: Rs. %.2f%n", years, result);

        scanner.close();
    }
}
