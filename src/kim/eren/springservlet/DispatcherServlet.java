package kim.eren.springservlet;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kim.eren.springservlet.controller.PersonController;

@SuppressWarnings("serial")
//@WebServlet("/*")
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
		try {
			prepareMappedDataAtRunTime();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		createControllerInstance(req, resp);
		executeController(resp);

	}

	private void checkServlets(HttpServletRequest req, HttpServletResponse resp) {
		System.out.println(req.getServletContext());
	}

	private void executeController(HttpServletResponse resp) throws IOException {
		if (controller.get("class") == PersonController.class) {
			Object object = new PersonController();
			for (java.lang.reflect.Method method : object.getClass().getDeclaredMethods()) {
				if (controller.get("method").equals(method.getName())) {
					resp.getWriter().append(((PersonController) object).addPerson());
				}
			}
		}
	}

	private void createControllerInstance(HttpServletRequest req, HttpServletResponse resp) {
		controller = new HashMap<String, Object>();
		for (String pathPart : req.getPathInfo().split("/")) {
			checkServlets(req, resp);
			Object object = mappedUrls.get(pathPart);
			if (object != null) {
				if (!(object instanceof String)) {
					controller.put("class", object);
				} else {
					controller.put("method", object);
				}
			}
		}

	}

	private void prepareMappedDataAtRunTime() throws ClassNotFoundException {
		Class<?>[] clazz =PersonController.class.getClassLoader()
				.loadClass("kim.eren.springservlet.controller.PersonController").getDeclaredClasses();
//		for(Annotation annot : clazz.getAnnotations()) {
//			System.out.println(annot);
//		}
		mappedUrls = new HashMap<String, Object>();
		mappedUrls.put("person", PersonController.class);
		mappedUrls.put("add", "addPerson");
	}

}
