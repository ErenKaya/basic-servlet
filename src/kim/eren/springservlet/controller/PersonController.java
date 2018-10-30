package kim.eren.springservlet.controller;

import kim.eren.springservlet.annots.RequestMapping;

@RequestMapping("person")
public class PersonController {

	@RequestMapping("add")
	public String addPerson() {
		return "Person added";
	}

}
