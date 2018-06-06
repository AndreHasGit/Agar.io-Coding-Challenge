import java.awt.*;
import java.awt.event.*;

void setup(){
  size(600, 600);
Label l1 = new Label("Introduce tu Nombre"),

    l2 = new Label("Introduce tu Password");
  
TextField t1 = new TextField("tu nombre",45),
    t2 = new TextField(20);
  
    t2.setEchoChar('*');
    add(l1);
    add(t1);
    add(l2);
    add(t2);
}
 
