function addActiveClass() {
  aObj = document.getElementById('prim-nav').getElementsByTagName('a');
  if(aObj === undefined){
    console.log("not adding active class to form elements");
    exit;
  }else{
  for(i=0;i<aObj.length;i++) {
    if(document.location.href.indexOf(aObj[i].href)>=0) {
      aObj[i].className +=' b';
    }
  }
}
}


