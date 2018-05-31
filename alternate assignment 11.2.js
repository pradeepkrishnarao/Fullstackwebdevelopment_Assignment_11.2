function myFunc(){ //myFunc() is a function that dynamically adds rows in a table
    var array1,tab,tr,td,tn,row,col; //variables declared
    array1=[["Cell1","Cell2"],["Cell3","Cell4"],["Cell5","Cell6"],["Cell7","Cell8"],["Cell9","Cell10"],["Cell11","Cell12"],["Cell13","Cell14"],["Cell15","Cell16"],["Cell17","Cell18"]];//array1[] initialized with array values  
    tab=document.getElementById("dynamic-table"); //tab object has table html element with id name dynamic-table 
        
    for(row=0;row<array1.length;row++){ //for loop iterates row until the length of the array
        tr=document.createElement('tr'); //table row object tr is created
            for(col=0;col<array1[row].length;col++){ //for loop iterates col with row count until the length of the array
                td=document.createElement('td'); //td object variable of table element is created    
                tn=document.createTextNode(array1[row][col]); //tn object created having array1[] row and col elements 
                td.appendChild(tn); //td object of table element associated with appendChild built-in method holds tn object parameter
                tr.appendChild(td); //tr object of table element associated with appendChild built-in method holds td object parameter
            }
                tab.appendChild(tr); //tab object of table element associated with appendChild built-in method holds tr object parameter
         }
}

