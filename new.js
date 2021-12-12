

function problem1(){

  console.log(calculateDistance([12,4],[34,21]));
  console.log(calculateDistance([54,34],[23,8]));
}


function problem2(){
  
  let sq=[[1,2,3],[4,5,6],[7,8,9]];
  let rect=[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
  let ragged=[[1,3],[4,5,6,7],[5,6,6,6], [5,9,9]]
  let not2d=[1,2,6]
  connsole.log(determineMatrixType(sq));
  console.log(determineMatrixType(rect));
  console.log(determineMatrixType(ragged));
  console.log(determineMatrixType(not2d));
}


function problem3(){

  let originalArray= [[1,2,3,4],
                    [5,6,7,8],
                    [9,10,11,12]
                   ];
  console.log(transpose(originalArray))     ;            

}





// problem 2
function determineMatrixType(m){

	for(let i=0; i<m.length; i++){
	 
      if(m.length==m[i].length)
        {return 2;}
	    else if(m[i].length== m[i+1].length && m.length > m[i].length)
        {return 1;}
      else if(m[i].length== m[i+1].length && m.length < m[i].length)
        {return 1;}
	    else if(m[i].length != m[i+1].length)
        {return 0}
	    else {return -1;}   
	    
	}
}

//console.log(determineMatrixType(mat)); 






// Problem 1

function calculateDistance(p1, p2){

  let pts=[p1,p2];
  let distance=0;
  let k =0;
 
  for(let i =0; i< pts[0].length ; i++){

    k = (pts[1][i]-pts[0][i]);
    k=k*k;
    distance+=k;
  }

  distance=Math.sqrt(distance);
  return distance;
}

//console.log(calculateDistance([12,10],[10,5]));  




//problem 3


function transpose(m){

  let rec= determineMatrixType(m);
  let tm = [];




  if(rec==1){

    for(let i = 0; i< m[0].length; i++){

       tm.push([]);
     };

    for (let k =0; k< m.length; k++){
     for(let n = 0; n< m[k].length; n++){
        tm[n].push(m[k][n]);
      
     };
    };
     
    return tm;
  }
  else{return null}


}





