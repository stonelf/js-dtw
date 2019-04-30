 var dtwStart,matrix,martix2;
 function dtw(arr1, arr2){
     matrix=[];matrix2=[];
     dtwStart=Date.now();
     for(var i=0;i<arr1.length;i++){
  		var a=[];
     	for(var j=0;j<arr2.length;j++){
     		a.push(distance(arr1[i], arr2[j]))
     	}
     	matrix.push(a);
     	matrix2.push(new Array(arr2.length))
     }
     for(var i=0;i<arr1.length;i++){
     	for(var j=0;j<arr2.length;j++){
     		if(i==0){//第一行
     			matrix2[0][j]=matrix[0][j]
     		}else{
     			if(j==0){//第一列
     				matrix2[i][0]=matrix[i][0]
     			}else{
	     			var d=matrix[i][j];
	     			matrix2[i][j]=Math.min(matrix2[i][j-1]+d,matrix2[i-1][j]+d,matrix2[i-1][j-1]+d+d);
     			}
     		}
     	}
     }
return matrix2[arr1.length-1][arr2.length-1];
 }
 function distance(v1, v2){
 	var r=0,l=Math.min(v1.length,v2.length);
 	for(var i=0;i<l;i++){
 		r=r+(v1[i]-v2[i])**2;
 	}
    return Math.sqrt(r);    
 }
