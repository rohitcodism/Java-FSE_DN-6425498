public class App {
    public static void main(String[] args) throws Exception {
        DocumentFactory wordDocumentFactory = new WordFactory();
        Document wordDocument = wordDocumentFactory.createDocument();
        wordDocument.open();
        wordDocument.edit();
        wordDocument.close();

        System.out.println("\n");

        DocumentFactory pdfDocumentFactory = new PdfFactory();
        Document pdfDocument = pdfDocumentFactory.createDocument();
        pdfDocument.open();
        pdfDocument.edit();
        pdfDocument.close();

        System.out.println("\n");

        DocumentFactory excelDocumentFactory = new ExcelFactory();
        Document excelDocument = excelDocumentFactory.createDocument();
        excelDocument.open();
        excelDocument.edit();
        excelDocument.close();
    }
}
