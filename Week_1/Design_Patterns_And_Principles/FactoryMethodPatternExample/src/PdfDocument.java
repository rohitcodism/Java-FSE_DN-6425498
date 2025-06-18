public class PdfDocument implements Document {
    @Override
    public void open() {
        System.out.println("Opening the PDF document.");
    }

    @Override
    public void edit() {
        System.out.println("Editing the PDF document.");
    }

    @Override
    public void close() {
        System.out.println("Saving the PDF document.");
    }
}
