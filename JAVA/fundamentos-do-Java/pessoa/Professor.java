package pessoa;

public class Professor extends Pessoa {
    private double salario;

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public double getSalario() {
        return salario;
    }

    String imprimirDadosDaPessoa() {
        System.out.println(super.imprimirDadosDaPessoa());

        return "Você é professor";
    }
}
