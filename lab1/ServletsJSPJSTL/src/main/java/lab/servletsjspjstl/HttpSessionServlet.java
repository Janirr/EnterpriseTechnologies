package lab.servletsjspjstl;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(name = "HttpSessionServlet", value = "/http-session-servlet")
public class HttpSessionServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession();

        ArrayList notes = (ArrayList) session.getAttribute("notes");
        if (notes == null) {
            notes = new ArrayList();
            session.setAttribute("notes", notes);
        }

        String note = request.getParameter("note");
        if (note != null)
            notes.add(note);

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<body>");
        out.println("<h1>My notes</h1>");
        out.println("<ul>");

        for (int i = 0; i < notes.size(); i++)
            out.println("<li>" + notes.get(i));

        out.println("</ul>");

        out.println("<form>");
        out.println("<input type='text' name='note'/><br/>");
        out.println("<input type='submit' value='Add note'/>");
        out.println("</form>");
        out.println("</body>");
        out.println("</html>");
    }
}