package pessoa;

public class Pessoa {
    private String nome;
    private int idade;
    private String cpf;

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCpf() {
        return cpf;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getIdade() {
        return idade;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    String imprimirDadosDaPessoa() {
        return "nome: " + nome + " | idade: " + idade + " | cpf: " + cpf;
    }
}
