package kim.eren.springservlet.util;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class SessionHandler {

	public static Map<String, HttpSession> sessions = new HashMap<String, HttpSession>();

	public static void addSession(HttpServletRequest req) {
		sessions.put(req.getSession().getId(), req.getSession());
	}

	public static boolean sessionExist(HttpServletRequest req) {
		return sessions.get(req.getSession().getId()) != null;
	}
}
