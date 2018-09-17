package kim.eren.springservlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kim.eren.springservlet.controller.PersonController;

@WebServlet("/*")
public class DispatcherServlet extends javax.servlet.http.HttpServlet {
	public Map mappedUrls;
	public Map controller;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doHandle(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		doHandle(req, resp);
	}

	private void doHandle(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		createControllerInstance(req);
		executeController(resp);

	}

	private void executeController(HttpServletResponse resp) throws IOException {
		if (controller.get("class") == PersonController.class) {
			Object object = new PersonController();
			for (java.lang.reflect.Method method : object.getClass().getMethods()) {
				if (controller.get("method").equals(method.getName())) {
					resp.getWriter().append(((PersonController) object).addPerson());
				}
			}
		}
	}

	private void createControllerInstance(HttpServletRequest req) {
		preparedMappedDataAtRunTime();
		controller = new HashMap<String, Object>();
		for (String pathPart : req.getPathInfo().split("/")) {
			dispatch(pathPart);
		}

	}

	private void dispatch(String pathPart) {
		switch (pathPart) {
		case "person":
			controller.put("class", mappedUrls.get("person"));
			break;
		case "add":
			controller.put("method", mappedUrls.get("add"));
			break;
		default:
			break;
		}

	}

	private void preparedMappedDataAtRunTime() {
		mappedUrls = new HashMap<String, Object>();
		mappedUrls.put("person", PersonController.class);
		mappedUrls.put("add", "addPerson");
	}

}
