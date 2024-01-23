package pessoa;

public class TesteDePessoa {
    public static void main(String[] args) {
        Professor professor = new Professor();
        professor.setCpf("11111112234");
        professor.setNome("Jão");
        professor.setIdade(18);
        professor.setSalario(50000.0);

        System.out.println(professor.imprimirDadosDaPessoa());

        Aluno aluno = new Aluno();
        aluno.setCpf("33480956735");
        aluno.setIdade(20);
        aluno.setMatricula("1234");
        aluno.setNome("Abrao");
        System.out.println(aluno.imprimirDadosDaPessoa());
    }
}
