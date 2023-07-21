
var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL= document.getElementById('bookmarkURL');

var BookmarkContainer;
    if (localStorage.getItem('myBookmark') !=null) {
        BookmarkContainer = JSON.parse(localStorage.getItem('myBookmark'))
        displayBookmark()
    }
    else{
        BookmarkContainer=[]
    }


function addBookmark() {

    if (validurl()==true && NamesBookmark.toLowerCase().includes(bookmarkName.value.toLowerCase())==false) 
    {
        var Bookmark ={
            name:  bookmarkName.value  ,
            urll:  bookmarkURL.value,
        }
    
        BookmarkContainer.push(Bookmark);
        localStorage.setItem('myBookmark' , JSON.stringify(BookmarkContainer))
        displayBookmark()
        cf()
        
    }
    else
    {
alert( `1 make sure the name is not repeated
2 then enter a link that begins with (https://)`)
    }

}

function displayBookmark() {
var list ='';
for (var i = 0; i < BookmarkContainer.length; i++) {
     list +=
     `<tr>
     <td>${BookmarkContainer[i].name}</td>
     <td ><a  href="">${BookmarkContainer[i].urll}</a></td>
     <td><a  target="_blank" href="${BookmarkContainer[i].urll}"><button  class="btn btn-sm btn-outline-warning  btnYellow"><i class="fa-regular fa-eye"></i></button></a></td>
     <td><button onclick="deleteBookmark(${i});"  class="btn btn-sm btn-outline-danger   btnRed"><i class="fa-solid fa-trash"></i></button></td>       
   </tr>
`
}
document.getElementById('tablelist').innerHTML=list
}

function cf() {
     bookmarkName.value  =''
     bookmarkURL.value =''

}

function deleteBookmark(BookmarkIndex) {
    BookmarkContainer.splice(BookmarkIndex,1)
    localStorage.setItem('myBookmark' , JSON.stringify(BookmarkContainer))
        displayBookmark()
}

function validurl() {
    var regex =/^https?:\/{2}/  ;
   return  regex.test(bookmarkURL.value)
   
   
}
var NamesBookmark=[]
BookmarkContainer = JSON.parse(localStorage.getItem('myBookmark'));
for (var index = 0; index < BookmarkContainer.length; index++) {
     NamesBookmark += BookmarkContainer[index].name;
}

