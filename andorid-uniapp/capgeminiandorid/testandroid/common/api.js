import { baseUrl } from './config.js'
export function bookList(val){
	if(val==undefined ){
		return new Promise(function(reslove, reject){
			uni.request({
				url: `${baseUrl}/list`,
				method:'GET',
				dataType: 'json',
				success:res =>{
					let result = res.data;
					reslove(res);
				},
				fail:() => {},
				complete:() =>{}
			});
		});
		
	}else{
		return new Promise(function(reslove, reject){
			uni.request({
				url: `${baseUrl}/list`,
				method:'GET',
				dataType: 'json',
				data:{'bookTitle' : val},
				success:res =>{
					let result = res.data;
					reslove(res);
				},
				fail:() => {},
				complete:() =>{}
			});
		});
	}
	
}
export function bookListById(bookId){    //editor or add
  return new Promise(function(reslove, reject){
  	uni.request({
  		url: `${baseUrl}/bookId`,
  		method:'GET',
  		dataType: 'json',
  		success:res =>{
  			let result = res.data;
  			reslove(res);
  		},
  		fail:() => {},
  		complete:() =>{}
  	});
  });
	
}