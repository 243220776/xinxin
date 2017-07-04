package com.app.Search;

import java.util.List;

public class Test {
	  public static void main(String[] args) { 
		    // TODO Auto-generated method stub  
		    SerachBase serachBase = SerachBase.getSerachBase();
		    
		    
		    
		    serachBase.add("1", "夏季雪纺衫短袖V领喇叭袖上衣", 1111111111);
		    serachBase.add("2", "露肩背挂脖格子短袖宽松软妹一字肩上衣女", "露肩背挂脖格子短袖宽松软妹一字肩上衣女"); 
		    serachBase.add("3", "短袖上衣+背带阔腿裤套装", "短袖上衣+背带阔腿裤套装"); 
		    serachBase.add("4", "夏季男士运动短袖速干健身上衣宽松短袖", "夏季男士运动短袖速干健身上衣宽松短袖"); 
		    serachBase.add("5", "无袖雪纺上衣", "无袖雪纺上衣"); 
		    serachBase.add("6", "超仙喇叭袖雪纺上衣", "超仙喇叭袖雪纺上衣");
		    serachBase.add("7", "小吊带两件套雪纺上衣", "小吊带两件套雪纺上衣");
		    serachBase.add("8", "露肩上衣女", "露肩上衣女");
		    serachBase.add("9", "男+女(2套价) 云朵情侣睡衣", "男+女(2套价) 云朵情侣睡衣"); 
		    serachBase.add("10", "韩版休闲连衣裙雪纺裙", "韩版休闲连衣裙雪纺裙"); 
		    serachBase.add("11", "推拉门衣柜简约现代大衣橱", "推拉门衣柜简约现代大衣橱"); 
		    serachBase.add("12", "【不晒图】肩颈七联衣", "【不晒图】肩颈七联衣"); 
		    serachBase.add("13", "时尚纯棉短袖长裤男士睡衣家居服套装", "时尚纯棉短袖长裤男士睡衣家居服套装"); 
		    serachBase.add("14", "一字肩连衣裙", "一字肩连衣裙"); 
		    serachBase.add("15", "纯棉背心无袖睡衣女夏季套装", "纯棉背心无袖睡衣女夏季套装");
		    serachBase.add("16", "上帝呀", "上帝呀");
		    
		    
		    String ids = serachBase.getIds("上衣");
		    
//		    System.out.println(ids);//号码
		    
		    List<Object> objs = serachBase.getObjects(ids);
		    
		    if (objs != null) {
		      for (Object obj : objs) {
		        System.out.println(obj);
		      } 
		    }else{
		    	System.err.println("暂无匹配信息！");
		    }
		    
		  }
	 
}
