package com.douzone.ch08.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.douzone.ch08.controller.dto.JsonResult;
import com.douzone.ch08.controller.vo.GuestbookVo;

@Controller
@RequestMapping("/api/guestbook")
public class GuestbookController {
	
	@ResponseBody
	@RequestMapping("/add")
	public JsonResult ex1(@RequestBody GuestbookVo vo) {
		// vo = guestbookService.addMessage(vo)를 사용해서 등록작업
		vo.setNo(1L);
		vo.setPassword("");
		
		return JsonResult.success(vo);
	}
	
	@ResponseBody
	@RequestMapping("/list")
	public JsonResult ex2(@RequestParam(value="sn", required=true, defaultValue="-1") Long no) {
		// vo = guestbookService.findAll(no)를 사용해서 리스트 가져오기
		List<GuestbookVo> list = new ArrayList<>();
		
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리1");
		vo.setMessage("메세지1");
		list.add(vo);
		
		vo = new GuestbookVo();
		vo.setNo(2L);
		vo.setName("둘리2");
		vo.setMessage("메세지2");
		list.add(vo);
		
		vo = new GuestbookVo();
		vo.setNo(3L);
		vo.setName("둘리3");
		vo.setMessage("메세지3");
		list.add(vo);
		
		vo = new GuestbookVo();
		vo.setNo(4L);
		vo.setName("둘리4");
		vo.setMessage("메세지4");
		list.add(vo);
		
		vo = new GuestbookVo();
		vo.setNo(5L);
		vo.setName("둘리5");
		vo.setMessage("메세지5");
		list.add(vo);
		
		return JsonResult.success(list);
	}
	
	@ResponseBody
	@RequestMapping("/delete/{no}")
	public JsonResult ex3(@PathVariable("no") Long no, String password) {
		// result = guestbookService.deleteMessage(no, password)를 사용해서 삭제작업
		
		Long data = 0L;
		//1. 삭제가 안 된 경우
		data = -1L;
		
		//2. 삭제가 된 경우
		data = no;
		
		return JsonResult.success(data);
	}
}
