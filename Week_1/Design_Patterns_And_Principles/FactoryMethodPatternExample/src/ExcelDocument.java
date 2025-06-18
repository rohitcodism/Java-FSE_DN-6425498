public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening the excel document.");
    }

    @Override
    public void edit() {
        System.out.println("Editing the excel document.");
    }

    @Override
    public void close() {
        System.out.println("Saving the excel document");
    }
}
