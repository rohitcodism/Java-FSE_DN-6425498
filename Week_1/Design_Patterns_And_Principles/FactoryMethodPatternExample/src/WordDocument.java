public class WordDocument implements Document {
    @Override
    public void open(){
        System.out.println("Opening the word document.");
    }

    @Override
    public void edit() {
        System.out.println("Editing the word document.");
    }

    @Override
    public void close() {
        System.out.println("Saving the word document.");
    }
}
