package com.app.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.app.Search.SerachBase;
import com.app.domain.Search;
import com.app.mapper.SearchMapper;
import com.app.service.SearchService;

@Service
public class SearchServiceImpl implements SearchService {
	
	@Autowired
	SearchMapper searchMapper;
	
	public String getSearch(String search){
		JSONObject json = new JSONObject();
		
		List<Search> info = searchMapper.getSearch();
		SerachBase serachBase = SerachBase.getSerachBase();
		
		if(info!=null&&info.size()>0){
			for (int i = 0; i < info.size(); i++) {
				String id = String.valueOf(info.get(i).getId());
				serachBase.add(id, info.get(i).getName(),info.get(i));
			}
		}
		
		String ids = serachBase.getIds(search);
		List<Object> objs = serachBase.getObjects(ids);
				
		List<Object> dat = new ArrayList<Object>();
		if (objs != null) {
		for (Object obj : objs) {
			dat.add(obj);
			}
		
		
		 }
		
		return json.toString();
	}
	
}
