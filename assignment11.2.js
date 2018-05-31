function myFunc(){ //myFunc() is a function that dynamically adds rows in a table
    var tab=document.getElementById("dynamic-table"); //tab object has table html element with id name dynamic-table  
    var i,j=0; //i and j variables are initialized
    var array1=[1,2,3,4,5,6,7,8,9,10]; //variable arr[] is initilaized  

    var row=tab.insertRow(0);     //first row variable is initialized 
    var cell1=row.insertCell(0);  //first cell1 variable is initialized
    var cell2=row.insertCell(1);  //second cell2 variable is initialized
        for(i=0;i<array1.length;i++){ //for loop iterates row until the length of the array  
            cell1.innerHTML="Cells"+array1[j]; //adds a row with first cell inserted with a value "Cell1" in the table 
            cell2.innerHTML="Cells"+array1[j+1];//second cell is inserted in the same row with a value "Cell2" in the table            
        }  
        tab.appendChild(row);//tab object of table element associated with appendChild built-in method holds tab object parameter    
    }

