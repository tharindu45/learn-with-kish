public final class Singleton {
    private static Singleton name;
    public String value;

    private Singleton(String value) {
        
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ex) {
            System.out.println(ex);
        }
        this.value = value;
    }

    public static Singleton getInstance(String value) {
        if (name == null) {
            name = new Singleton(value);
        }
        return name;
    }
}