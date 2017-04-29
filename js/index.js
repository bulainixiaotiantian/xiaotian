// JavaScript Document
documentReady(function(){
	
//page1的菜单wrap盒子--------------------------------

	var oTy=document.getElementById("ty");
	var oAli=oTy.getElementsByTagName("li");
	
	var oPop=document.getElementsByClassName("popup")[0];
	
	var oSection=document.getElementsByClassName("section");
	var timer;
	for(var i=0;i<oAli.length;i++){
		
		oAli[i].onmouseover=function(){
			clearTimeout(timer);
			    //让包含每一个section的大盒子block----
				oPop.style.display="block";
				 //让每一个section都隐藏---
				for(var j=0;j<oSection.length;j++){
					oSection[j].style.display="none"
				};
			   var  oGetid=this.getAttribute("data-index");
			   
			   document.getElementById("section"+oGetid).style.display="block";
	
		};
		
	    oAli[i].onmouseout=function(){
	    	timer=setTimeout(function(){
				
	    		oPop.style.display="none";
	    		
	    	},200)
	
	    };
	};
	
	oPop.onmouseover=function(){
		clearTimeout(timer);
	   this.style.display=" block";
	
	};
	oPop.onmouseout=function(){
	   this.style.display="none";
	
	};
//---------------------轮播图----------------------------

 slide("sliderA");
   
//---------------第一楼-------------------------------
function change_con(id){
	var oFirst_floor=document.getElementById(id);
	var oFloor_title=oFirst_floor.children[0];
	var aTitle_oFir_flo=oFloor_title.getElementsByTagName("li");
	var oCon_first_flo=oFirst_floor.getElementsByClassName("con_b");
	
	
	for(var i=0;i<aTitle_oFir_flo.length;i++){
		
		aTitle_oFir_flo[i].index=i;
		
		aTitle_oFir_flo[i].onmouseover=function(){
			hide();
			oCon_first_flo[this.index].style.display="block";
		};
		 aTitle_oFir_flo[i].onmouseout=function(){
			oCon_first_flo[this.index].style.display="block";
		
		};
	
	};
	
	function hide(){
		for(var j=0; j<oCon_first_flo.length;j++){
			oCon_first_flo[j].style.display="none";
		};
	};

};

change_con("first_floor");
change_con("two_floor");





























});
  