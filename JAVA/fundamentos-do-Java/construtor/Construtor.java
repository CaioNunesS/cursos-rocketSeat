package construtor;

public class Construtor {
    public int numero;

    public Construtor(int numero) {
        this.numero = numero;
    }

    public Construtor(int numero, String texto) {
        this.numero = numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getNumero() {
        return numero;
    }
}
