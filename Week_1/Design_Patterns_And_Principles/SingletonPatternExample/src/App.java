public class App {
    public static void main(String[] args) throws Exception {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application started.");
        logger2.log("Application is ready for service.");

        if(logger1==logger2){
            System.out.println("Both logger belong to the same instance.");
        }else{
            System.out.println("Each logger belong to a different instance!");
        }
    }
}
