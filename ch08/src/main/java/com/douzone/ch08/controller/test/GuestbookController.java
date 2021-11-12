package com.douzone.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("guestbookTestController")
@RequestMapping("/test/gb")
public class GuestbookController {
	
	// add
	@RequestMapping("/ex1")
	public String ex1() {
		return "gb/ex1";
	}
	
	// list
	@RequestMapping("/ex2")
	public String ex2() {
		return "gb/ex2";
	}
	
	// list
	@RequestMapping("/ex3")
	public String ex3() {
		return "gb/ex3";
	}
}
