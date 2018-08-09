/*
* @Author: Administrator
* @Date:   2018-08-04 17:04:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-04 18:08:10
*/
window.onload=function(){
	let lunguo=document.querySelector('.lunguo')
	let img=document.querySelectorAll('.lunguo img')
	let left=document.querySelector('.lunguo .left')
	let right=document.querySelector('.lunguo .right')
	let btns=document.querySelectorAll('.lunguo .btns')
	let t=setInterval(fn,2000)
	
	let m=1
	function fn(){
		if(m==1){
			img[1].style.display='block'
			img[0].style.display='none'
			btns[1].className='btns btn1'
			btns[0].className='btns'
			m=0
		}
		else{
			img[0].style.display='block'
			img[1].style.display='none'
			btns[0].className='btns btn1'
			btns[1].className='btns'
			m=1
		}
	}
	lunguo.onmouseenter=function(){
		clearInterval(t)
	}
	lunguo.onmouseleave=function(){
		t=setInterval(fn,2000)
	}
	right.onclick=function(){
		fn()
	}
	left.onclick=function(){
		fn()
	}

	btns[1].onclick=function(){
		m=1
		fn()
	}
	btns[0].onclick=function(){
		m=0
		fn()
	}

}