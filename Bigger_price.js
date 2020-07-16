function biggerPrice(limit, data) {
    let i =0;
    let sortedArray = [];
    
    while (i < data.length-1) {
      
      let getPriceA = data[i].price; 
      let getPriceB = data[i+1].price;
      
      if (getPriceA > getPriceB) {
        sortedArray.push(data[i])
        sortedArray.push(data[i+1])
        
      } else {
        sortedArray.push(data[i+1]);
        sortedArray.push(data[i])
      }
      i+= 2;
    };
   //console.log(sortedArray);
    let finalArray = [];
    let n = 0;
    while (n < limit) {
      finalArray.push(sortedArray[n])
      n++;
    } return finalArray; 
  };
      
      
      
  // biggerPrice(2, [
  //     {"name": "bread", "price": 100},
  //     {"name": "wine", "price": 138},
  //     {"name": "meat", "price": 15},
  //     {"name": "water", "price": 1}
  // ]); /*, [
  //     {"name": "wine", "price": 138},
  //     {"name": "bread", "price": 100}
  // ]) */
  
  // biggerPrice(1, [
  //     {"name": "pen", "price": 5},
  //     {"name": "whiteboard", "price": 170}
  // ]); ;// [{"name": "whiteboard", "price": 170}])
  
  biggerPrice(2, [
    {"name":"bread","price":10},
    {"name":"wine","price":138},
    {"name":"meat","price":15},
    {"name":"milk","price":25}
  ]); //