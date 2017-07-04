package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.SearchService;

@RestController
@RequestMapping("search")
public class SearchController {
	
	@Autowired
	SearchService searchService;
	
	@RequestMapping("getSearch")
	public String getSearch(String search){
		
		return searchService.getSearch(search);
	}

}
