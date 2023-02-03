for (let i=1;i<=10;i++) {
    let row = "";
    for (let j=1;j<=10;j++) {
      if (i==1 || i==10) {
        row+= "*";
      }
      else if(j==1 || j==10) {
          row +="*";
        }
      else{
          row+=" ";
        }
      }
    console.log(row);
    }
    
  