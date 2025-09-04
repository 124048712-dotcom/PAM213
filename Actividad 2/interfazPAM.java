import javax.swing.*;

public class interfazPAM extends JFrame{

    inicioPAM inicio = new inicioPAM();

    public interfazPAM(){
        setTitle("Inicio PAM");
        frame.setSize(350,300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JButton botonreglamento = new JButton("Reglamento POO");
        botonreglamento.addActionListener();

        JButton botonlineamiento = new JButton("Lineamientos Classroom");
        botonlineamiento.addActionListener();

        JButton botonfechas = new JButton("Fechas de PArciales");
        botonfechas.addActionListener();

        JButton botonporcentajes = new JButton("Porcentajes por parcial");
        botonporcentajes.addActionListener();
        
        frame.add(botonreglamento);
        frame.add(botonlineamiento);
        frame.add(botonfechas);
        frame.add(botonporcentajes);

    
    }
    public static void main(String[] args) {
        new interfazPAM();
    }



}