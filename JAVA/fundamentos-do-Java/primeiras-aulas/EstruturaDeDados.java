import java.util.ArrayList;
import java.util.List;

public class EstruturaDeDados {
    public static void main(String[] args) {
        // List
        List<String> nomes = new ArrayList<>();
        nomes.add("Caio");
        nomes.add("Manu");
        nomes.add("Henrique");

        // System.out.println(nomes.get(2));
        // for (String nome : nomes) {
        // System.out.println("O nome é: " + nome);
        // }

        // nomes.forEach(nome -> System.out.println("O nome é: " + nome));

        nomes.forEach(System.out::println);
    }
}
