public class SingleThread {
    public static void main(String[] args) {
        
        Singleton singleton = Singleton.getInstance("First Name");
        Singleton singleton1 = Singleton.getInstance("Last Name");
        System.out.println(singleton.value);
        System.out.println(singleton1.value);
    }
}